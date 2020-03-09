import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';


const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'usuarios', component: ListaUsuarioComponent },
  { path: 'creacion', component: CrearUsuarioComponent },
  { path: 'info/:username', component: DetallesUsuarioComponent },
  { path: 'creacionbeta', component: UsuarioRegistroComponent }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
