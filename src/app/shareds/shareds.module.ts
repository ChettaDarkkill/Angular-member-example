import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule
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
     AuthContentComponent
  ]

})
export class SharedsModule { }
