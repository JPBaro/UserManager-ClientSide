import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { authInterceptorProviders } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    DetallesUsuarioComponent,
    CrearUsuarioComponent,
    UsuarioRegistroComponent,
    LoginComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
