import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { ILoginComponent } from './login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../shareds/services/alert.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthURL } from '../../authentication/authentication.url';
import { AccountService } from '../../shareds/services/account.service';
import { AuthenService } from '../../services/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private account: AccountService,
    private authen: AuthenService
  ) {
    this.initialCreateFormData()
    console.log(this.authen)
  }
  Url = AppURL
  form: FormGroup

  onSubmit(): void {
    if(this.form.invalid)
      return this.alert.something_wrong()
    // console.log(this.form.valid)
    this.account
        .onLogin(this.form.value)
        .then(res => {
          this.authen.setAuthenticated(res.accessToken)
          this.alert.notify('เข้าสู่ระบบสำเร็จ', 'info')
          this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard])
        }).catch(err => this.alert.notify(err.Message))
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
       email:['', Validators.required],
       password:['', Validators.required],
       remember:[true],
    })
  }

}

