import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { OnlineMarketPlaceService } from 'src/app/services/online-market-place.service';


@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.css']
})
export class UpdateUserInfoComponent {
  constructor(private onlineMarket: OnlineMarketPlaceService) { }
  inputName:any;
  inputAddress:any;
  inputContact:any;
  inputEmail:any;
  isSeller:any;
  

ngOnInit(){ 
  var userInfo = JSON.parse(localStorage.getItem("session"))
  console.log('the name is ', userInfo.name)
  this.inputName=userInfo.name;
  this.inputAddress =userInfo.address
  this.inputContact = userInfo.contact
  this.inputEmail = userInfo.email
  this.isSeller = userInfo.isSeller


}

  userDetails:any;


  

  updateUserinfo() { 
     let userDetailssss = {
      
      email : this.inputEmail,
      name: this.inputName,
      contact: this.inputContact,
      address: this.inputAddress,
      isSeller:this.isSeller
      
    }
    this.userDetails = {
      
     email : this.inputEmail,
     name: this.inputName,
     contact: this.inputContact,
     address: this.inputAddress,

   }
   console.log(this.inputContact)

   this.onlineMarket.updateUser(this.userDetails).subscribe((a: any) => {

    console.log(a)  
    localStorage.setItem("session",JSON.stringify(userDetailssss))
    

  })
  this.displayAlert("Information Updated Successfully!")
   }

  private _user!: User;
  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }
  alertMessage:string ='';
  showAlert:boolean=false;


  private displayAlert(message:string){
    this.alertMessage =message;
    this.showAlert = true;
   }

}