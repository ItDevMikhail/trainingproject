import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  authUser(user: any){
    const body = { login: user.login, password: user.password };
    return this.http.post('http://localhost:5000/users/auth', body);
  }
  registerUser(user: any) {
    const body = { login: user.login, email: user.email, password: user.password };
    return this.http.post('http://localhost:5000/users/reg', body);
  }
}
