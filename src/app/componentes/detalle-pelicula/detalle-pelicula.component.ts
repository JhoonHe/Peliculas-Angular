import { Component, OnInit } from '@angular/core';
import { PELICULAS } from 'src/app/models/peliculas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent {

  peliculas = PELICULAS;
  nombrePelicula: string = '';
  pelicula: any;

  constructor(private routeActivate: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.nombrePelicula = this.routeActivate.snapshot.params["nombre"];
    this.peliculas.forEach((pelicula) => {
      if (pelicula.nombre_pelicula == this.nombrePelicula) {
        this.pelicula = pelicula;
      }
    })
  }

}
