import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: Boolean;
  public user_displayName: String;
  public user_email: String;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName
          this.user_email = auth.email;
          console.log("Logged in");
          console.log(this.user_displayName);
          console.log(this.user_email);
          console.log(auth);
          console.log(this.isLoggedIn);
          this.router.navigate(['']);
        }
      }
    );
  }
   

  ngOnInit() {
    
  }
  signOut() {
    return this.afAuth.auth.signOut();
  }
}
