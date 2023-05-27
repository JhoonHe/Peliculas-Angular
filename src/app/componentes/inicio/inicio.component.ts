import { Component } from '@angular/core';
import { CATEGORIAS } from 'src/app/models/categorias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  categoria = CATEGORIAS;

  constructor(private router: Router) {

  }

  verPeliculas(nombre: string) {
    console.log(nombre);
    this.router.navigate(['/categoria', nombre]);
  }
}
