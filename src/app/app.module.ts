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
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    DetallesUsuarioComponent,
    CrearUsuarioComponent,
    UsuarioRegistroComponent,
    LoginComponent,
    HomepageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
