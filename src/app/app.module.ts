import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    DetallesUsuarioComponent,
    CrearUsuarioComponent,
    UsuarioRegistroComponent,
    LoginComponent,
    MainNavComponent,
    HomepageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent, MainNavComponent]
})
export class AppModule { }
