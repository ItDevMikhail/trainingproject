import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  success = false;
  login: String | undefined;
  email: String | undefined;
  password: String | undefined;
  constructor(private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

  }
  userRegister(): any {
    const user = {
      login: this.login,
      email: this.email,
      password: this.password
    }
    if (!this.checkForm.checkLogin(user.login)) {
      return false;
    } else if (!this.checkForm.checkEmail(user.email)) {
      return false;
    } else if (!this.checkForm.checkPassword(user.password)) {
      return false;
    }
    this.authService.registerUser(user)
      .subscribe(
        (data: any) => {
          if (data._id) {
            this.flashMessages.show("Пользователь добавлен", { timeout: 1000 });
            this.success=true;
            setTimeout(()=>{
              this.router.navigate(['/auth']);
            }, 1000)
            
          } else {
            this.flashMessages.show("Пользователь не добавлен", { timeout: 2000 });
            
          }
        },
      );
  }
}
