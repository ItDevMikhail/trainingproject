import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: any = {
    login: '',
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}