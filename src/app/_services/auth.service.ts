import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://192.168.1.10:8080/login'; // pending to custom and set proper uri up


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'x-www-form-urlencoded' });

  login(credentials): Observable<any> {

    let postData = new FormData();
    postData.append('username', credentials.username);
    postData.append('password', credentials.password);
    return this.http.post<any>(AUTH_API, postData);
    // { headers: new HttpHeaders() });
  }
}
