import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
import { Location } from '@angular/common';


interface Product {
  id: number;
  name: string;
  description: string;
  category:any
  price:any
  quantity:any 
  sellerEmail:any 
  product_id:any
  imageUrl:any
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent { 

  
  constructor(private profileserve:ProfileserviceService, private router:Router,private location: Location){}
  products:Product[];
  product 
  sampleproduct
  productLength 
  cartP 
  user = sessionStorage.getItem("user")
   proFile: any= sessionStorage.getItem("profile")
  ngOnInit(){ 
    this.profileserve.getCartOfUser().subscribe((a:any)=>{
      // this.products = a
      this.sampleproduct = Object.entries(a).map(([key, value]) => {
        return { key: key, value: value };
      });
  
      localStorage.setItem("cartC",this.sampleproduct.length) 
     
    })  
    

 
    if(this.proFile==1){
      this.profileserve.getPurchaseHistoryUser().subscribe((a:any)=>{
        this.products = a 
        this.product = Object.entries(a).map(([key, value]) => {
          return { key: key, value: value };
        });
        
     this.productLength  =this.product.length

       
        }) 
        
    } 
    
    else if(this.proFile==2){
      this.profileserve.getSellHistoryUser().subscribe((a:any)=>{
        this.products = a
       this.product = Object.entries(a).map(([key, value]) => {
          return { key: key, value: value };
        });
       
        this.productLength  =this.product.length
      
      })
    }
    else if(this.proFile==3){
      this.profileserve.getCartOfUser().subscribe((a:any)=>{
        this.products = a
        this.product = Object.entries(a).map(([key, value]) => {
          return { key: key, value: value };
        });
        
        this.cartP= this.product.length
        this.productLength  =this.product.length
        sessionStorage.setItem("cart",this.cartP)

       
       })
    }  
     
   
  } 


  getPurchesDetails(sellerEmail,id,name,description,price,imageUrl,category){ 
    sessionStorage.setItem("productId",id);
    sessionStorage.setItem("productName",name);
    sessionStorage.setItem("description",description);
    sessionStorage.setItem("price",price);
    sessionStorage.setItem("image",imageUrl);
    sessionStorage.setItem("category",category);
    
    sessionStorage.setItem("sellermail",sellerEmail)
    this.router.navigateByUrl("/buy")
    
    this.deleteCart(id);
  }
 
 
deleteCart( product_id){  
  this.profileserve.deleteUserCartItem(product_id).subscribe((a:any)=>{ 
   
    this.profileserve.getCartOfUser().subscribe((a:any)=>{
      this.products = a
      this.product = Object.entries(a).map(([key, value]) => {
        return { key: key, value: value };
      });
  
      localStorage.setItem("cartC",this.product.length) 
     
    })  
    window.location.reload() 
    location.reload(); 
    
    
    
  
  })  
  

} 

deleteSellHistory(product_id){ 
  this.profileserve.deleteUserSellHistory(product_id).subscribe((a:any)=>{
   window.location.reload() 
   this.displayAlert("sell details deleted successfully")
   
  }) 


    
}
alertMessage: string = '';
showAlert: boolean = false;
private displayAlert(message: string) {
  this.alertMessage = message;
  this.showAlert = true;
} 


}
