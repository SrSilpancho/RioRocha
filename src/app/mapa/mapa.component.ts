import { Component, OnInit } from '@angular/core';
import { Marcadores } from "../modelos/mock-marcadores";
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  titulo = "Rio Rocha";
  ph= "PH: ";
  nombre ="Nombre :"
  marcadores = Marcadores;
  lat: -17.386300; 
  long: -66.121871;
  constructor() { }

  ngOnInit() {
  }

}
