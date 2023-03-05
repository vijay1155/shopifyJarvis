import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { User } from 'src/app/models/user';
import { CognitoService } from 'src/app/services/cognito.service';


import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 
  
  // fname:string = '';
  // lname:string = '';
  // university:string = '';
  // email:string = '';
  // mobileNo:string = '';
  // password:string = '';


   private _user!: User;
  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }
   isConfirm:boolean = false;
   alertMessage:string ='';
   showAlert:boolean=false;

  
   cognitoService: CognitoService = new CognitoService;
   constructor(private userService:UserServiceService,private router:Router, ){}


   ngOnInit(): void{
    this.user ={} as User;
    this.isConfirm = false;
   }

   isEmail(search:string):boolean
   {
       var  serchfind:boolean;

       var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

       serchfind = regexp.test(search);

       console.log(serchfind)
       return serchfind
   }

   public signUpWithCognito(){
    this.user.u_contact = this.user.u_contact.toString()
    if (this.user.u_contact.length!=10) {
      this.displayAlert("Mobile number is invalid");
      return;
    }

    if (!this.isEmail(this.user.u_email)) {
      
      this.displayAlert("Email is invalid");
      return;
    }



    if (this.user && this.user.u_email && this.user.u_password) {

      this.cognitoService.signUp(this.user)
      .then(()=> {
        this.isConfirm = true;
      })
      .catch((error:any)=>
      {
        this.displayAlert(error.message);
      })
      
    }
    else{
      this.displayAlert("Missing email or password");
    }
   }

   public confirmSignUp(){
    if (this.user) {
      this.cognitoService.confirmSignUp(this.user)
      .then(()=>{
        this.displayAlert("Email Verified");
        console.log("Email verified "+this.user.u_contact)
        let data ={
          name:this.user.u_name,
          contact:this.user.u_contact,
          email:this.user.u_email,
          address:this.user.u_address,
          isSeller:this.user.u_isSeller
        }

        let dataForLocal = { 
          name :this.user.u_name,
          email:this.user.u_email,
          isSeller:this.user.u_isSeller
        }
        //store user data into local stroage
        localStorage.setItem('session',JSON.stringify(data));



        this.userService.addUser(data).subscribe((response:any)=>{
          console.log(response)
        })
        this.router.navigateByUrl("/home")

        // this.router.navigate(['/sign-in'])

      })
      .catch((error:any)=>
      {
        this.displayAlert(error.message);
      })
    }else{
      this.displayAlert("Missing user information");
    }
   }


   private displayAlert(message:string){
    this.alertMessage =message;
    this.showAlert = true;
   }


  //  public signUpWithCognito(){
  //   if (this.user && this.user.u_email && this.user.u_password) {
  //     this.displayAlert(" ew "+this.user.u_contact);

  //     Auth.signUp(
  //       {
          
  //         username:this.user.u_email,
  //         password: this.user.u_password,
  //         attributes:{
  //           'custom:email': this.user.u_email,
  //           'custom:name' : this.user.u_name,
  //           //address :this.user.u_address,
  //           'custom:contact' : this.user.u_contact
  //           //pincode : this.user.u_pincode
            
  
  //         }
  //       }
        
  //     )
  //     .then(()=> {
  //       this.isConfirm = true;
  //     })
  //     .catch((error:any)=>
  //     {
  //       this.displayAlert("signup "+error.message+ "  d ");
  //     })
      
  //   }
  //   else{
  //     this.displayAlert("Missing email or password");
  //   }
  //  }

 



  //  public confirmSignUp(){
  //   if (this.user) {
  //     Auth.confirmSignUp(this.user.u_email,this.user.u_verfication_code).then(()=>{
  //       this.router.navigate(['/sign-in'])
  //     })
  //     .catch((error:any)=>
  //     {
  //       this.displayAlert(error.message);
  //     })
  //   }else{
  //     this.displayAlert("Missing user information");
  //   }
  //  }



  //  private displayAlert(message:string){
  //   this.alertMessage =message;
  //   this.showAlert = true;
  //  }


 

}