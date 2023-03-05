import { Component } from '@angular/core';
import { OnlineMarketPlaceService } from 'src/app/services/online-market-place.service';
import { ProfileserviceService } from 'src/app/services/profileservice.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  constructor(private  profileserve:ProfileserviceService, private onlineMarket: OnlineMarketPlaceService){}
  product 
  productss

ngOnInit(){ 
  
  this.profileserve.getCartOfUser().subscribe((a:any)=>{
    // this.productss = a
    this.product = Object.entries(a).map(([key, value]) => {
      return { key: key, value: value };
    });

    localStorage.setItem("cartC",this.product.length)
  })

 
} 



  totalQuantity: any;
  remainingQuantity: any;
  updateDetails: any;

  alertMessage: string = '';
  showAlert: boolean = false;
  
  thumbImage = "https://productshopyfy.s3.ap-south-1.amazonaws.com/2023328242.jpeg"
  emailId = JSON.parse(localStorage.getItem("session"))


  products =
    {
      product_id: sessionStorage.getItem("productId"),
      email: this.emailId.email,


      product_details: {
        name: sessionStorage.getItem("productName"),
        price: sessionStorage.getItem("price"),
        category:sessionStorage.getItem("category"),

        description: sessionStorage.getItem("description"),
        imageUrl: sessionStorage.getItem("image")
      }
    }

  addToCart() {  
    let data = localStorage.getItem('session');

    let session = JSON.parse(data);

    if (session.email != "x") { 
      let productshop =
    {
      product_id: sessionStorage.getItem("productId"),
      email: this.emailId.email,


      product_details: {
        name: sessionStorage.getItem("productName"),
        price: sessionStorage.getItem("price"), 
        sellerEmail: sessionStorage.getItem("sellermail"),
        category:sessionStorage.getItem("category"),


        description: sessionStorage.getItem("description"),
        imageUrl: sessionStorage.getItem("image")
      }
    }
    this.onlineMarket.sendToCart(productshop).subscribe((a: any) => {
     
     
      
 
    })  
   

    this.displayAlert("Item successfully added to cart") ;
  
      
   
  
    }
    else{
      this.displayAlert(" Please Login to add item in cart ")
    } 
   
    

  } 

  
  purchasequantity = 1
  purches(quantity) {

   

    let data = localStorage.getItem('session');
    let session = JSON.parse(data);


    if (session.email != "x") { 
      let productshop =
      {
        product_id: sessionStorage.getItem("productId"),
        email: this.emailId.email,
  
  
        product_details: {
          name: sessionStorage.getItem("productName"),
          price: sessionStorage.getItem("price"),
          quantity: quantity, 
          category:sessionStorage.getItem("category"),
          description: sessionStorage.getItem("description"),
          imageUrl: sessionStorage.getItem("image")
        }
      }
      this.onlineMarket.addToPurches(productshop).subscribe((a: any) => {
      
      })
      this.totalQuantity = sessionStorage.getItem("quantity");
      this.remainingQuantity = this.totalQuantity - quantity;


      this.updateDetails = {
        productId: sessionStorage.getItem("productId"),
        sellerEmail: sessionStorage.getItem("sellermail"),

        remQuantity: this.remainingQuantity
      }

      this.onlineMarket.updateQuantity(this.updateDetails).subscribe((a: any) => {

      

      })

      this.displayAlert("Buy successful")
      this.purchasequantity = 1

    }
    else{
      this.displayAlert("Please Log In to buy the product ")
    }

  }

  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }


}