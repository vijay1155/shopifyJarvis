import { Component } from '@angular/core';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar-buy',
  templateUrl: './navbar-buy.component.html',
  styleUrls: ['./navbar-buy.component.css']
})
export class NavbarBuyComponent { 
  session = JSON.parse(localStorage.getItem("session"))
  emailId = this.session.email;
  isSeller = this.session.isSeller

constructor(private profileserve:ProfileserviceService){} 
product
products  
name =JSON.parse(localStorage.getItem("session")).name
ngOnInit(){
  this.profileserve.getCartOfUser().subscribe((a:any)=>{
    // this.products = a
    this.product = Object.entries(a).map(([key, value]) => {
      return { key: key, value: value };
    });

    localStorage.setItem("cartC",this.product.length)
  }) 
 
}
  getPurchaseHistory(){
    sessionStorage.setItem("profile","1"); 
// this.profileserve.getPurchaseHistoryUser().subscribe((a:any)=>{console.log(a)})

  } 
  getCartU(){
    sessionStorage.setItem("profile","3"); 
    // this.profileserve.getCartOfUser().subscribe((a:any)=>{console.log(a)})
  } 
  getSellHistory(){
    sessionStorage.setItem("profile","2"); 
    // this.profileserve.getSellHistoryUser().subscribe((a:any)=>{
    //   console.log(a)
    // })
  } 
  cartCount = localStorage.getItem("cartC")

  logOut(){
    let dataForLocal1 = { 
      name :"x",
      email:"x",
      isSeller:"x"

    }
  localStorage.setItem('session',JSON.stringify(dataForLocal1));
  }

}
