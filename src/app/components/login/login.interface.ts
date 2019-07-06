import { FormGroup } from "@angular/forms";

export interface ILoginComponent {
  Url: any
  form: FormGroup
  onSubmit(): void
}

export interface ILogin {
   email: String
   password: String
   remember: Boolean
}
