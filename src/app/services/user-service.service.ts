import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

const apiUrl = 'https://fpn0mvxx31.execute-api.ap-south-1.amazonaws.com/dev/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  alertMessage:string ='';
  showAlert:boolean=false;
  
  

  constructor(private http: HttpClient) {}

  addUser(data :any): Observable<any> {

    // this.displayAlert("add user called " + data.u_email);
    console.log("add user called "+ data);  
    return this.http.post(apiUrl, data)

  }

  private displayAlert(message:string){
    this.alertMessage =message;
    this.showAlert = true;
   }
}
