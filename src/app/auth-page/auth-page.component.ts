import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-library';
import { HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { IAuth } from '../iauth';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  loginForm: IAuth = {
    login: '',
    password: ''
  }
  receivedUser: IAuth | undefined;
  done: boolean = false;
  constructor(private http: HttpClient,
    private authService: AuthService) { }

  ngOnInit(): void {
    localStorage.setItem('list', JSON.stringify(BOOKS))
  }
  submit(loginForm: IAuth){
    this.authService.postData(loginForm)
            .subscribe(
                (data: any) => {this.receivedUser=data; this.done=true;},
                error => console.log(error)
            );
  }
}
