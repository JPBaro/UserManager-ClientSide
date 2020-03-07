import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({ providedIn: 'root'})
export class UsuarioService {

  private baseUrl: 'http://192.168.1.10:8080/manager-tool/users';

  private httpString;

  constructor(private http: HttpClient) {
     this.baseUrl = 'http://192.168.1.10:8080/manager-tool/users';
   }

  getUsuario(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  crearUsuario(usuario: Usuario): Observable<Object> {

    return this.http.post(this.baseUrl.concat('npsw') , usuario);
  }

  updateUsuario(username: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${username}`, value);
  }

  deleteUsuario(username: string): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${username}`, { responseType: 'text' });  
  }  

  getUsuariosList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  

  // public getUsers(url: 'http://192.168.1.10:8080/manager-tool/users'): Observable<Usuario[]> {
  // return this.http.get<Usuario[]>(url);
}



