import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './components/buy/buy.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SellComponent } from './components/sell/sell.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateUserInfoComponent } from './components/update-user-info/update-user-info.component';


const routes: Routes = [ 
  {
    path:"edit",
    component:UpdateUserInfoComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"buy",
    component:BuyComponent
  },
  {
    path:"product",
    component:ProductsComponent
  },
  { 

    path:"home",
    component:HomeComponent,
   
  },

 {
    component:SignUpComponent,
    path:'sign-up'
  },
  {
    component:SignInComponent,
    path:'sign-in'
  },
 {
    component:SellComponent,
    path:'sell'
  },
  
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
