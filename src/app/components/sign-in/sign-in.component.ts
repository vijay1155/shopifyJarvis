import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

import { CognitoService } from 'src/app/services/cognito.service';
import { OnlineMarketPlaceService } from 'src/app/services/online-market-place.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  user: User | undefined;
  alertMessage: string = '';
  showAlert: boolean = false;
  emailDetails:any;

  isForgotPassword: boolean = false; 
  newPassword: string = '';

  constructor(private router: Router, private cognitoService: CognitoService,private onlineMarket: OnlineMarketPlaceService) { }

  ngOnInit(): void {

    this.user = {} as User;

  }
session :any
logedInuser:any;
  signInWithCognito() {
    if (this.user && this.user.u_email && this.user.u_password) {
      this.cognitoService.signIn(this.user).then(() => {

        // this.emailDetails ={
        //   email:this.user.u_email
        // }

        this.onlineMarket.getUserDetails(this.user.u_email).subscribe((a: any) => {

          console.log("The user details from the dynamodb", a)
          //store user data into local stroage
          localStorage.setItem('session',JSON.stringify(a));
  
        })

       // console.log("The user details from the dynamodb ----> ",this.logedInuser);
        

        let dataForLocal = { 
          email:this.user.u_email
        }
        

        //TODO
        // for fetching the data 
        let data : any = localStorage.getItem('session');
        this.session = JSON.parse(data)
        console.log("this is mail---->",this.session)
        this.router.navigate(['/product']);

      }).catch((error: any) => {
        this.displayAlert(error.message);
      })
    }else{
      this.displayAlert("Please enter a valid email or password");
    }
  }

  forgotPasswordClicked(){
    if (this.user && this.user.u_email) {
      
      this.cognitoService.forgotPassword(this.user).then(()=>{
        this.isForgotPassword= true;
      })
      .catch((error:any)=>{
        this.displayAlert(error.message);
      })
    } else {
      this.displayAlert("Please Enter a valid email address");
    }
  }

  newPasswordSubmit(){
    if (this.user && this.user.u_verfication_code && this.newPassword.trim().length !=0) {
      this.cognitoService.forgotPasswordSubmit(this.user, this.newPassword.trim()).then(()=>{
        this.displayAlert("Password Updated");
        this.isForgotPassword= false;
      }).catch((error:any)=>{

        this.displayAlert(error.message);
      })
      
    } else {
      this.displayAlert("Please enter Valid input");
    }
  }

  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;

  } 
 

  isLoggedIn(){
    let data : any = localStorage.getItem('session');
    this.session = JSON.parse(data)
  if( this.session.email==='x'){ 
    return false
   
  }
  else{
    return true
  }
  }

}