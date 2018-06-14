import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Formulario from '../Formulario/Formulario';
import Mapa from '../Mapa/Mapa'; 

class MainPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Formulario}/>
          <Route path='/map' component = {Mapa}/>
        </Switch>
      </div>
    );
  }
}

export default MainPage;
