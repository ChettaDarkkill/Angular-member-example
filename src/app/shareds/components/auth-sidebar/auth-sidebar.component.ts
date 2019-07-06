import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../../app.url';
import { AuthURL } from '../../../authentication/authentication.url';
import { IAuthSidebarComponent } from './auth-sidebar.interface';
import { IAccount, AccountService } from '../../services/account.service';
import { AuthenService } from '../../../services/authen.service';
import { AlertComponent } from 'ngx-bootstrap';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements IAuthSidebarComponent {

  AppURL = AppURL
  AuthURL = AuthURL
  UserLogin: IAccount;

  constructor(
    private account: AccountService,
    private authen: AuthenService,
    private alert: AlertService,
    private router: Router
  ) {
    this.initialLoadUserLogin()
  }

  private initialLoadUserLogin() {
    this.account.getUserLogin(this.authen.getAuthenticated())
    .then( userLogin => this.UserLogin = userLogin)
    .catch(err => {
      this.alert.notify(err.Message)
      this.authen.clearAuthenticated();
      this.router.navigate(['/', AppURL.Login])
    })
  }
}
