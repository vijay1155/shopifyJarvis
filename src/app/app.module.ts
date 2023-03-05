import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageSliderComponent } from './components/HomePage/company-info/imageSlider/components/imageSlider/imageSlider.component';
import {MatBadgeModule} from '@angular/material/badge';


/*------------- nav and footer imports -----------*/

import { FooterBarComponent } from './components/footer-bar/footer-bar.component';


/* ------ buy page imports ------------- */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyComponent } from './components/buy/buy.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatRippleModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

/* login page and sell page */
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { SellComponent } from './components/sell/sell.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { NavbarBuyComponent } from './components/navbar-buy/navbar.component';
import { NavbarSellComponent } from './components/navbar-sell/navbar-sell.component';
import { NavbarProfileComponent } from './components/navbar-profile/navbar-profile.component';
import { CompanyInfoComponent } from './components/HomePage/company-info/company-info.component';
import { ProductssComponent } from './components/HomePage/company-info/productss/productss.component';
import { SearchBarComponent } from './components/HomePage/company-info/search-bar/search-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateUserInfoComponent } from './components/update-user-info/update-user-info.component';


// import { ImageSliderComponent } from './components/HomePage/company-info/imageSlider/components/imageSlider/imageSlider.component';
@NgModule({
  declarations: [
    
    CompanyInfoComponent,
    ProductssComponent,
    SearchBarComponent,
  
    FooterBarComponent,
    AppComponent,
    BuyComponent,
    ProductsComponent,
    SignUpComponent,
    SignInComponent ,
    
    
    MessageModalComponent,
    SellComponent,
    HomeComponent,
    NavbarHomeComponent,
    NavbarBuyComponent,
    NavbarSellComponent,
    NavbarProfileComponent,
    ImageSliderComponent,
    ProfileComponent,
    UpdateUserInfoComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  
    MatRippleModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatBadgeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
