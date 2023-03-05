import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService { 
  
  emailId = JSON.parse(localStorage.getItem("session"))
  constructor(private http:HttpClient) { } 
  getPurchaseHistoryUser(){ 
    let params = new HttpParams();
    params = params.append("email", this.emailId.email);
    return this.http.get("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/userpurches",{params:params})

  } 
  getCartOfUser(){ 
    let params = new HttpParams();
    params = params.append("email", this.emailId.email);
    return this.http.get("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/usercart",{params:params})

  }
  getSellHistoryUser(){ 
    let params = new HttpParams();
    params = params.append("email", this.emailId.email);
    return this.http.get("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/sellhistory",{params:params})

  } 
  deleteUserCartItem(product_id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append("email", this.emailId.email);
    params = params.append("product_id",product_id);

    return this.http.delete("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/usercart",{params:params})
  }
  deleteUserSellHistory(product_id:any):Observable<any>{
    let params = new HttpParams();
    params = params.append("email", this.emailId.email);
    params = params.append("product_id",product_id);

    return this.http.delete("https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users/sellhistory",{params:params})
  }
}
