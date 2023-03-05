import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineMarketPlaceService } from 'src/app/services/online-market-place.service';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 constructor( private productdata:OnlineMarketPlaceService,public router:Router,private profileserve:ProfileserviceService){

 }
 product 
 productLength
 ngOnInit(){ 
  sessionStorage.setItem("categoryForSearch","all")
  this.productdata.getAllProducts().subscribe((a:any)=>{
    this.products= a;  
    

     
   })
   this.profileserve.getCartOfUser().subscribe((a:any)=>{
    // this.products = a
    this.product = Object.entries(a).map(([key, value]) => {
      return { key: key, value: value };
    });

    localStorage.setItem("cartC",this.product.length)
  })

 } 
   get filteredProducts(): Product[] { 
    var category1 = sessionStorage.getItem("categoryForSearch")
    

      if(this.searchText){  
    
      
       
        return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    ); 
  
    }
    else{  
      if(category1==='all'){
      
         return this.products
      }
 
      return this.products.filter((product) =>
      product.category.toLowerCase().includes(category1.toLowerCase()) 
      
    );

    }
  
  } 
 
 searchText:string="";
 


 onSearchTextEntered(searchValue:string){
  this.searchText=searchValue;
  sessionStorage.setItem("search",this.searchText)
 } 
 
 products: Product[]=[];
 getPurchesDetails(sellerEmail,id,name,description,price,imageUrl,quantity,category){ 
  sessionStorage.setItem("productId",id);
  sessionStorage.setItem("productName",name);
  sessionStorage.setItem("description",description);
  sessionStorage.setItem("price",price);
  sessionStorage.setItem("image",imageUrl);
  sessionStorage.setItem("quantity",quantity);
  sessionStorage.setItem("sellermail",sellerEmail)
  sessionStorage.setItem("category",category)
  this.router.navigateByUrl("/buy")
  

} 










  
  

}