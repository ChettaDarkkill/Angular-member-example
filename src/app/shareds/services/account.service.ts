import { Injectable } from "@angular/core";
import { IRegister } from "../../components/register/register.interface";
import { ILogin } from "../../components/login/login.interface";


//ลงทะเบียน
@Injectable()
export class AccountService {

  mockUserItem: IAccount[] = [
    {
      id: 1,
      firstname: 'เชษฐา',
      lastname: 'ครอบกระโทก',
      email: 'chetta@gmail.com',
      password: '123456',
      position: 'Fronend Developer',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
      created: new Date(),
      updated: new Date(),
    }
  ]

   onLogin(model: ILogin) {
     return new Promise<{ accessToken: string }>((resolve, reject) => {
        const userLogin = this.mockUserItem.find(item => item.email == model.email && item.password == model.password)
        if(!userLogin) return reject({ Message: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' })
        resolve({
          'accessToken': userLogin.id
        })
     })
   }

   onRegister(model: IRegister) {
      return new Promise((resolve, reject) => {
        model['id'] = Math.random
        this.mockUserItem.push(model)
        resolve(model)
      })
   }
}


export interface IAccount {
    firstname: String;
    lastname: String;
    email: String;
    password: string;
    id?: any;
    position?: String;
    image?: String;
    created?: Date;
    updated?: Date;
}
