import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CategoriaPeliculasComponent } from './componentes/categoria-peliculas/categoria-peliculas.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'categoria/:nombre', component: CategoriaPeliculasComponent },
  { path: 'detalle/:nombre', component: DetallePeliculaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
