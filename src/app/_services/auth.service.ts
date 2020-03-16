import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { JwtResponse } from './jwt-response';


const AUTH_API = 'http://192.168.1.10:8080/login'; // pending to custom and set proper uri up
const TOKEN_KEY = 'Authorization';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginb(credentials): Observable<any> { // old one waiting to test other one JP

    const postData = new FormData(); // use FormData for post username and password
    postData.append('username', credentials.username);
    postData.append('password', credentials.password);
    return this.http.post<any>(AUTH_API, postData);

    // continue - pending return bearer token !!!! to keep 
    // { headers: new HttpHeaders() });
  }

  login(credentials): Observable<any> {  /// recibe Token !!!
    const postData = new FormData(); // use FormData for post username and password
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
   
    postData.append('username', credentials.username);
    postData.append('password', credentials.password);
    return this.http.post<any>(AUTH_API, postData, { observe: 'response' });
   }

  

}

