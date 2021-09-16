import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  postData(loginForm: any) {
    const body = { login: loginForm.login, password: loginForm.password };
    return this.http.post('http://localhost:5000/api/auth', body);
  }
  authUser(user: any){
    return this.http.post('http://localhost:5000/users/auth', user);
  }
  registerUser(user: any) {
    const body = { login: user.login, email: user.email, password: user.password };
    return this.http.post('http://localhost:5000/users/reg', body);
  }
}
