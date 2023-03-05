import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void { 
    
  } 

enterSerachValue:string=""; 
category1 = sessionStorage.getItem("categoryForSearch")
@Output()
serachTextChanged:EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(){
  this.serachTextChanged.emit(this.enterSerachValue);
}  
getSearch(search){ 
  sessionStorage.setItem("search",search)

}



}

