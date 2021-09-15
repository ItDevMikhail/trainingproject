import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // registerUser(user){
  //   let headers = new Headers();
  //   headers.append('Content-type', 'application/json');
  //   return this.http.post()
  // }
  postData(loginForm: any) {

    const body = { login: loginForm.login, password: loginForm.password };
    return this.http.post('http://localhost:5000/api/auth', body);
  }
}
