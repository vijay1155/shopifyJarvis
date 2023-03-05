import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() {
    Amplify.configure({
      Auth: environment.cognito
    });
  }

  public signUp(user:User) :Promise<any>{
    return Auth.signUp(
      {
        username:user.u_email,
        password: user.u_password,
        // attributes:{
        //   'custom:email': user.u_email,
        //   'custom:name' : user.u_name,
        //   //address :user.u_address,
        //   'custom:contact' : user.u_contact
        //   //pincode : user.u_pincode

        // }
      }
    )
  }


  public confirmSignUp(user:User): Promise<any>{
    return Auth.confirmSignUp(user.u_email,user.u_verfication_code);
  }


  // this method will return user info if any user is 
  //logged in with valid email and password 
  public getUser() : Promise<any> { return Auth.currentUserInfo(); }

  public signIn(user: User): Promise<any> { return Auth.signIn (user.u_email, user.u_password);}

  public signOut(): Promise<any> { return Auth.signOut();}
  
  // this method will sent a new code to user email 
  public forgotPassword (user: User): Promise<any> { return Auth.forgotPassword (user.u_email); }
  
  // we submit the new password with email and code sent to that email 
  public forgotPasswordSubmit (user: User, new_password:string): Promise<any>{ return Auth.forgotPasswordSubmit (user.u_email, user.u_verfication_code, new_password); }

}
