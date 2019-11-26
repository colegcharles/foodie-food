import { CartService } from './../services/cartService';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Home } from '../patterns/template/home';
import { NavBar } from '../patterns/template/navbar';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Menu } from '../patterns/template/menu';
import { Cart } from '../patterns/template/cart';
import { auth } from 'firebase';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navBarValues: string[] = [];
  public isLoggedIn: boolean;
  public userDisplayName: string;
  public userEmail: string;
  public array: any[] = [];
  public userName: string;
  public cartCount = 0;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    public cart: CartService
  ) {}


  ngOnInit() {

      this.afAuth.authState.subscribe(
        (auth) => {
          if (auth == null) {
            this.isLoggedIn = false;
            this.userDisplayName = '';
            this.userEmail = '';
            this.router.navigate(['login']);
          } else {
            this.isLoggedIn = true;
            this.userDisplayName = auth.displayName;
            this.userEmail = auth.email;
            this.cart.userDisplayName = auth.displayName;
            this.cart.userEmail = auth.email;
            this.router.navigate(['']);
          }

          this.cart.GetItems(this.userDisplayName);

        }
      );


      const homeNavBar: NavBar = new Home();
      const menuNavBar: NavBar = new Menu();
      const cartNavBar: NavBar = new Cart();

      this.navBarValues.push(homeNavBar.show());
      this.navBarValues.push(menuNavBar.show());
      this.navBarValues.push(cartNavBar.show());





  }
  signOut() {
    return this.afAuth.auth.signOut();
  }
}


