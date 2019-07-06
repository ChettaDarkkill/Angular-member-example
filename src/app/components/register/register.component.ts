import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { IRegisterComponent } from './register.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertService } from '../../shareds/services/alert.service';

declare let $;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {

  constructor(
    private builder: FormBuilder,
    private alert: AlertService
  ) {
    this.initialCreateFromData()
  }

  Url = AppURL
  form: FormGroup;

  // ลงทะเบียน
  onSubmit() {
    if(this.form.invalid){
      this.alert.something_wrong()
    }
    console.log(this.form.value)
  }

  private initialCreateFromData()
  {
      //สร้างฟอร์ม
      this.form  = this.builder.group({
         firstname: ['', [Validators.required]],
         lastname: ['', [Validators.required]],
         email: ['', [Validators.required]],
         password: ['', [Validators.required]],
         cpassword: ['', [Validators.required, this.comparePassword('password')]]
      })
  }

  // สร้างรายละเอียดเอง
  private comparePassword(passwordField: string) {
    return function(confirm_password: AbstractControl) {
      if(!confirm_password.parent) return

      const password = confirm_password.parent.get(passwordField)

      const passwordSubscribe = password.valueChanges.subscribe(() => {
         confirm_password.updateValueAndValidity()
         passwordSubscribe.unsubscribe()
      })

      if(confirm_password.value === password.value) return;

      return { compare: true }
    }
  }
}
