import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainNavComponent },
  { path: 'main/usuarios', component: ListaUsuarioComponent },
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
