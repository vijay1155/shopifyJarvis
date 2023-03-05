import { Component } from '@angular/core';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
@Component({
  selector: 'app-navbar-sell',
  templateUrl: './navbar-sell.component.html',
  styleUrls: ['./navbar-sell.component.css']
})
export class NavbarSellComponent { 
  
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
cartCount = localStorage.getItem("cartC")
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
logOut(){
  let dataForLocal1 = { 
    name :"x",
    email:"x"
  }
localStorage.setItem('session',JSON.stringify(dataForLocal1));
}

}
