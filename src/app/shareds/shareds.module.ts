import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { AccountService } from './services/account.service';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AuthNavbarComponent,
    AuthContentComponent,
    AuthSidebarComponent
  ],
  exports: [
     AuthNavbarComponent,
     AuthSidebarComponent,
     BsDropdownModule,
     AuthContentComponent,
     ReactiveFormsModule,
     FormsModule
  ],
  providers: [
    AlertService,
    AccountService
  ]

})
export class SharedsModule { }
