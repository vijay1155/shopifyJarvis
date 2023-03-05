import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrls: ['./productss.component.css']
})
export class ProductssComponent {

  // public productList : any;
  // constructor(private api : ApiService) { }

  // ngOnInit(): void {
  //   // this.api.getProduct()
  //   // .subscribe(res=>{
  //   //   this.productList =res;
  //   // })
  // } 


  constructor(){

  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  categories =[
    {name:"all",image:"/assets/allProducts.jpeg"},
    {name:"electronics", image:"/assets/electronics.jpeg"},
  {name:"clothing",image:"/assets/cloth.jpeg"},
  {name:"home", image:"/assets/home.jpeg"},
  {name:"sports",image:"/assets/sports.jpeg"},
  {name:"beauty",image:"/assets/beauty.jpeg"}
  ]
  getCategory(name){ 
   
   
    sessionStorage.setItem("categoryForSearch",name)
  } 
  @Output()
serachTextChanged:EventEmitter<string> = new EventEmitter<string>();
category1 = sessionStorage.getItem("categoryForSearch")

onClickCategory(){ 
 return this.serachTextChanged.emit(this.category1)

}
  
}
