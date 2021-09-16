import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  login: String | undefined;
  password: String | undefined;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

  }
  userLogin() {
    const user = {
      login: this.login,
      password: this.password
    }
    this.authService.authUser(user)
      .subscribe(
        (data: any) => {
          if (data.login = this.login) {
            localStorage.setItem('token', data.token);
            this.router.navigate(['/library']);
          } else {
            console.log(data.message)
          }
        })
      }
  }
