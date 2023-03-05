import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopify';
  private inactivityTime: number = 300; // inactivity time in seconds
  private timeoutId: number;
  constructor(private router : Router){}
  ngOnInit() {
    this.setTimeout();
    window.addEventListener('mousemove', this.resetTimeout);
    window.addEventListener('mousedown', this.resetTimeout);
    window.addEventListener('keypress', this.resetTimeout);
    window.addEventListener('touchmove', this.resetTimeout);
    window.addEventListener('scroll', this.resetTimeout);
  }

  ngOnDestroy() {
    window.removeEventListener('mousemove', this.resetTimeout);
    window.removeEventListener('mousedown', this.resetTimeout);
    window.removeEventListener('keypress', this.resetTimeout);
    window.removeEventListener('touchmove', this.resetTimeout);
    window.removeEventListener('scroll', this.resetTimeout);
  }

  resetTimeout = () => {
    clearTimeout(this.timeoutId);
    this.setTimeout();
  }

  setTimeout() {
    this.timeoutId = window.setTimeout(() => { 
      
      // sign out the user
      let dataForLocal1 = { 
          name :"x",
          email:"x"
        }
      localStorage.setItem('session',JSON.stringify(dataForLocal1));
      this.router.navigateByUrl('/home')
      //   window.location.href = 'https://busbooking.auth.ap-south-1.amazoncognito.com/logout?client_id=8127dpdo14galuhj10cb271v1&logout_uri=http%3A%2F%2Flocalhost%3A4200%2Fsignin';
    }, this.inactivityTime * 1000);
    
    
  }
}
