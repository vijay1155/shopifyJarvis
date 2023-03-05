import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineMarketPlaceService {
  apiUrl;
  constructor(private http:HttpClient) { } 
  sendToCart(product): Observable<any>{
    
    return this.http.post(" https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/usercart",product) 

  } 
  
  addToPurches(product){
  
    return this.http.post("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/userpurches",product)
  }
  getAllProducts(){
    return this.http.get(" https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/products")
  } 
  postProduct(body:any){
    return this.http.post("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/products",body)
  }
  updateQuantity(updateDetails){
    return this.http.post("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/products/updateproducts",updateDetails)
  }
  getUserDetails(emailDetails){
    let params = new HttpParams();
    params = params.append("email", emailDetails);

    return this.http.get("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users",{params:params})

  } 
  updateUser(userDetails){
    return this.http.post("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/updateusers",userDetails)
  }
}