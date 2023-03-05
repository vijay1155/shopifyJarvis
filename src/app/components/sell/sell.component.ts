import { Component } from '@angular/core';
import { OnlineMarketPlaceService } from 'src/app/services/online-market-place.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
constructor( private postProduct: OnlineMarketPlaceService){

} 
data:any = localStorage.getItem('session');
session:any= JSON.parse(this.data);

  product = {
    name:null as any,
    quantity:null as any,
    price: null as any,
    category:null as any,
    productDescription: null as any,
    image: null as any,
    sellerEmail: this.session.email 
  };

  previewUrl: any = null;


  onImageSelection(event: any) {
    const fileInput = document.getElementById("productImage") as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];


      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.previewUrl = reader.result;
        this.product.image = reader.result?.toString().split(',')[1];
      

        //console.log("image is", this.product.image)
      };

    } 
   
  }
  alertMessage: string = '';
  showAlert: boolean = false;
  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;

  }
  
  postProductForSell(){  
   let data = localStorage.getItem('session');
 let session= JSON.parse(data);
    if(session.email !="x"){ 
      this.postProduct.postProduct(this.product).subscribe((a:any)=>{console.log(a)})
      this.displayAlert("Product posted successfully")

    } 
    else{
      this.displayAlert("Please Login and go for sell")
    }
    
  }



} 
