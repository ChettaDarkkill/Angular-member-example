import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { IRegisterComponent } from './register.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {

  constructor(private builder: FormBuilder) {
    this.initialCreateFromData()
  }

  Url = AppURL
  form: FormGroup;

  // ลงทะเบียน
  onSubmit() {
    console.log(this.form.value)
  }

  private initialCreateFromData()
  {
      //สร้างฟอร์ม
      this.form  = this.builder.group({
        firstname: [],
        lastname: [],
        email: [],
        password: [],
        cpassword: []
     })
  }
}
