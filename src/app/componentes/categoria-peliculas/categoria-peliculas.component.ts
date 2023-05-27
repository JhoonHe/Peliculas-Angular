import { Component, OnInit } from '@angular/core';
import { CATEGORIAS } from 'src/app/models/categorias';
import { PELICULAS } from 'src/app/models/peliculas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-peliculas',
  templateUrl: './categoria-peliculas.component.html',
  styleUrls: ['./categoria-peliculas.component.css']
})
export class CategoriaPeliculasComponent implements OnInit {

  pelicula = PELICULAS;
  categoria = CATEGORIAS;
  nombreCategoria: string = '';
  peliculas: any[] = [];

  constructor(private routeActivate: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.nombreCategoria = this.routeActivate.snapshot.params["nombre"];
    this.pelicula.forEach((pelicula) => {
      if (pelicula.nombre_categoria == this.nombreCategoria) {
        console.log(pelicula);
        this.peliculas.push(pelicula);
      }
    })
  }

  verPelicula(nombre: string) {
    console.log(nombre)
    this.router.navigate(['/detalle', nombre]);
  }

}
