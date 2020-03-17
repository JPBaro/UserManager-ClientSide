import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { JwtResponse } from './jwt-response';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


const AUTH_API = 'http://localhost:8080/login'; // pending to custom and set proper uri up
const TOKEN_KEY = 'Authorization';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })  //not used so far
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private httpClient: HttpClient;

  constructor(private handler: HttpBackend) { this.httpClient = new HttpClient(handler) }

  loginb(credentials): Observable<any> { // old one waiting to test other one JP

    const postData = new FormData(); // use FormData for post username and password
    postData.append('username', credentials.username);
    postData.append('password', credentials.password);
    return this.httpClient.post<any>(AUTH_API, postData);

    // continue - pending return bearer token !!!! to keep 
    // { headers: new HttpHeaders() });
  }

  loginC(credentials): Observable<any> {  /// recibe Token !!!

    const headersIn = new HttpHeaders().append('Content-Type', 'application/json');

    
    const postData = new FormData(); // use FormData for post username and password
    postData.append('username', credentials.username);
    postData.append('password', credentials.password);
    return this.httpClient.post<any>(AUTH_API, postData,{observe: 'response', responseType: 'json' },) ;
    
  }

  /*
  ----------------------
  */
  login(credentials): Observable<any> {

    const postData = new FormData(); // use FormData for post username and password
    postData.append('username', credentials.username);
    postData.append('password', credentials.password);

    var options = {
      method: 'POST',
      url: 'http://192.168.1.10:8080/login',
      headers:
      {
        Host: '192.168.1.10:8080',
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: { username: 'jpb', password: '123' }
    };

    return this.httpClient.post<any>(AUTH_API, options);
  }


}

