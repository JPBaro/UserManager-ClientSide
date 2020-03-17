import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

  private baseUrl;
  private httpString;

  headers: any;


  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/manager-tool/users'; // provisional routing! to app1 
    // this.headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Content-Encoding': '',
    //   'Authorization': 'Basic' + btoa('jpb:123')
    // });
  }

  getUsuario(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`, { responseType: 'text' });
    // return this.http.get(`${this.baseUrl}/${username}`, { headers: this.headers });
  }

  crearUsuario(usuario: Usuario): Observable<any> {

    return this.http.post(this.baseUrl.concat('npsw'), usuario);

  }

  updateUsuario(username: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${username}`, value);
  }

  deleteUsuario(username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${username}`, { responseType: 'text' });
  }

  getUsuariosList(): Observable<any> {
    // let headers = new HttpHeaders();
    // headers = headers.append('Authorization', 'Basic' + btoa('jpb:123'));//     pendiente revisar!!!!!
    // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // return this.http.get(`${this.baseUrl}`, { headers: this.headers });
    return this.http.get(`${this.baseUrl}`, { responseType: 'json' });
  }

}



