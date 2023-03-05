import { Component } from '@angular/core';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent { 
  session = JSON.parse(localStorage.getItem("session"))
  emailId = this.session.email;
  isSeller = this.session.isSeller
  name =JSON.parse(localStorage.getItem("session")).name
  
constructor(private profileserve:ProfileserviceService, private cartCounter:ProfileComponent){ 
  
} product
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
 
  
    window.location.reload();
  
// this.profileserve.getPurchaseHistoryUser().subscribe((a:any)=>{console.log(a)})

} 
getCart(){
  sessionStorage.setItem("profile","3"); 
  
  
  window.location.reload();
  
  
 
  // this.profileserve.getCartOfUser().subscribe((a:any)=>{console.log(a)})
} 
getSellHistory(){
  sessionStorage.setItem("profile","2"); 
  window.location.reload();
  // this.profileserve.getSellHistoryUser().subscribe((a:any)=>{
  //   console.log(a)
  // })
} 

cartCount = localStorage.getItem("cartC")

getcartCount(){ 
  this. cartCount = this.cartCounter.cartP

}
logOut(){
  let dataForLocal1 = { 
    name :"x",
    email:"x",
    isSeller:"x"
  }
localStorage.setItem('session',JSON.stringify(dataForLocal1));
}

}
