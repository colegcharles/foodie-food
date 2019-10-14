import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  title = 'foodie-food';
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ){

  
  // this.afAuth.authState.subscribe(
  //   (auth) => {
  //     if (auth == null) {
  //       console.log("Logged out");
  //       this.isLoggedIn = false;
  //       this.user_displayName = '';
  //       this.user_email = '';
  //       this.router.navigate(['login']);
  //     } else {
  //       this.isLoggedIn = true;
  //       this.user_displayName = auth.displayName
  //       this.user_email = auth.email;
  //       console.log("Logged in");
  //       console.log(this.user_displayName);
  //       console.log(this.user_email);
  //       console.log(auth);
  //       this.router.navigate(['']);
  //     }
  //   }
  // );
}
}