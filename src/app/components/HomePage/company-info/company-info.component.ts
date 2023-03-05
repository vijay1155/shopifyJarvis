import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  slides: SlideInterface[] = [
    { url: '/assets/shopping-1.jpg', title: 'Marketplace' },
    { url: '/assets/shopping-6.png', title: 'Buy' },   
    { url: '/assets/shopping-3.jpg', title: 'Sell' },
  ];

}
