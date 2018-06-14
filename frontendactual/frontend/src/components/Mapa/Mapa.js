import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import axios from 'axios';

import { url } from '../../lib/backend';


export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      marcadores:[],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  componentWillMount() {
    axios.get(url('/api/v1/marcadores/'))
      .then(response => response.data)
      .then((marcadores) => {
        this.setState({ marcadores });
      });
  }
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};

  render() {
    const marcadores = this.state.marcadores.map((marcador) => {
      return(
        <Marker
        onClick={this.onMarkerClick}
        title={'The marker`s title will appear as a tooltip'}
        Ph={marcador.pH}
        position={{lat:marcador.latitud, lng:marcador.longitud}}
        />

      );        
    });
    return (
      <Map google={this.props.google} zoom={15}
        initialCenter={{
            lat: -17.378645,
            lng: -66.147966
        }}>
        {marcadores}
       <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}>
           <div>
             <p>
             Ph: {this.state.selectedPlace.Ph}
             </p>
           </div>
       </InfoWindow>
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBYsrzeyP_N8T32iJucPns8GJ0usPdWfO4')
})(MapContainer)
