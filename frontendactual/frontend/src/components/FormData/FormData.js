import React,{Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Grid,Input} from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import Resources from '../../Resources/Resources';
const resource = new Resources();
class FormData  extends Component {
  /* value={this.state.nameTeam} onChange={e => this.handleChange(e)}*/

  constructor(props) {
    super(props);
    //aqui llenas lo que falta solo hare para dos

    this.state = {
      date:'',
      latitude:'',
      longitude:'',
      disolvedOxygen: '',
      nitrates:'',
      pH:'',
      t:'',
      totalSolids:'',
      totalphosporus: '',
      turbidity:'',
      conductivity:'',
      hardness:'',
      alkalinity:'',
    }
  }
  handleChangeDate(e) {
    this.setState({date: e.target.value});

  }
  handleChangeLatitude(e) {
    this.setState({latitude: e.target.value});
  }
  handleChangeLongitude(e) {
    this.setState({longitude: e.target.value});
  }
  handleChangeDisolvedOxygen(e) {
    this.setState({disolvedOxygen: e.target.value});
  }
  handleChangeNitrates(e) {
    this.setState({nitrates: e.target.value});
  }
  handleChangePH(e) {
    this.setState({pH: e.target.value});
  }
  handleChangeT(e) {
    this.setState({t: e.target.value});
  }
  handleChangeTotalSolids(e) {
    this.setState({totalSolids: e.target.value});
  }
  handleChangeTotalPhosporus(e) {
    this.setState({totalphosporus: e.target.value});
  }
  handleChangeTurbidity(e) {
    this.setState({turbidity: e.target.value});
  }
  handleChangeConductivity(e) {
    this.setState({conductivity: e.target.value});
  }
  handleChangeHardness(e) {
    this.setState({hardness: e.target.value});
  }
  handleChangeAlkalinity(e) {
    this.setState({alkalinity: e.target.value});
  }


  save() {
    //aqui completas es para enviar a la base de datos.
    const datas= {
      fecha: this.state.date,
      latitud: this.state.latitude,
      longitud: this.state.longitude,
      oxigenoDisuelto: this.state.disolvedOxygen,
      nitratos: this.state.nitrates,
      pH: this.state.pH,
      T: this.state.t,
      solidosTotales: this.state.totalSolids,
      fosforoTotal: this.state.totalphosporus,
      turbiedad: this.state.turbidity,
      conductividad: this.state.conductivity,
      dureza: this.state.hardness,
      alcalinidad: this.state.alkalinity,
    }
    resource.saveInformation(datas);
  }
  render() {
    return(
      <div className='administration'>
      <Grid centered >
      <Grid.Row columns={2}>
      <Grid.Column>
      </Grid.Column>
      <Header as='h2'>Save Information</Header>
      <Grid.Column width={9}>
      <Form>
          <Form.Group>
          <Form.Field control={Input} label='Date' placeholder='Date'
          value={this.state.date} onChange={e => this.handleChangeDate(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='Latitude' placeholder='Latitude'
          value={this.state.latitude} onChange={e => this.handleChangeLatitude(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='Longitude' placeholder='Longitude'
          value={this.state.longitude} onChange={e => this.handleChangeLongitude(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='Disolved Oxygen' placeholder='Disolved Oxygen'
          value={this.state.disolvedOxygen} onChange={e => this.handleChangeDisolvedOxygen(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='Nitrates' placeholder='Nitrates'
          value={this.state.nitrates} onChange={e => this.handleChangeNitrates(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='PH' placeholder='PH'
          value={this.state.pH} onChange={e => this.handleChangePH(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='T' placeholder='T'
          value={this.state.t} onChange={e => this.handleChangeT(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='Total Solids' placeholder='Total Solids'
          value={this.state.totalSolids} onChange={e => this.handleChangeTotalSolids(e)}/>
           </Form.Group>
           <Form.Group>
          <Form.Field control={Input} label='Total Phosporus' placeholder='Total Phosporus'
          value={this.state.totalphosporus} onChange={e => this.handleChangeTotalPhosporus(e)}/>
           </Form.Group>
           <Form.Group>
           <Form.Field control={Input} label='turbidity' placeholder='Turbidity'
           value={this.state.turbidity} onChange={e => this.handleChangeTurbidity(e)}/>
            </Form.Group>
            <Form.Group>
            <Form.Field control={Input} label='conductivity' placeholder='Conductivity'
            value={this.state.conductivity} onChange={e => this.handleChangeConductivity(e)}/>
             </Form.Group>
             <Form.Group>
           <Form.Field control={Input} label='hardness' placeholder='hardness'
           value={this.state.hardness} onChange={e => this.handleChangeHardness(e)}/>
            </Form.Group>
            <Form.Group>
           <Form.Field control={Input} label='alkalinity' placeholder='Alkalinity'
           value={this.state.alkalinity} onChange={e => this.handleChangeAlkalinity(e)}/>
            </Form.Group>
           <Form.Group>
           <Form.Field>
           <Button secondary onClick= {() => this.save()}> Save </Button>
           </Form.Field>
           </Form.Group>
        </Form>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    );
  }

}

export default FormData;