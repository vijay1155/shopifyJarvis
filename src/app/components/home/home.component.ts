import { Component } from '@angular/core';
import { ProfileserviceService } from 'src/app/services/profileservice.service';
import { ImageSliderComponent } from '../HomePage/company-info/imageSlider/components/imageSlider/imageSlider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  constructor(private profileserve:ProfileserviceService){

  } 
  products
  product
  
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  ngOnInit(): void { 
    this.profileserve.getCartOfUser().subscribe((a:any)=>{
      // this.products = a
      this.product = Object.entries(a).map(([key, value]) => {
        return { key: key, value: value };
      });
  
      localStorage.setItem("cartC",this.product.length)
    })
    this.slides[0] = {
      id: 0,
      src: './assets/shopping-1.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/shopping-2.jpeg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/shopping-3.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }

}
