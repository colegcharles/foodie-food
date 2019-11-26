import { CartRepository } from './../patterns/Iterator/cartRepository';
import { Iterator } from '../patterns/Iterator/iterator';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as nodemailer from 'nodemailer';
import { Router } from '@angular/router';
import { CartService } from '../services/cartService';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name: string[] = [];
  public total: any = 0;
  public array: any[] = [];
  public price: string[] = [];
  private isLoggedIn: boolean;
  public user_name: string;
  public user_email: string;
  foodObject: AngularFireList<any> = null;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    public cart: CartService
  ) {
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.user_name = '';
          this.user_email = '';
        } else {
          this.user_name = auth.displayName;
          this.user_email = auth.email;
          this.cart.userDisplayName = auth.displayName;
          this.cart.userEmail = auth.email;
        }
      }
    );
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {

          this.isLoggedIn = false;
          this.user_name = '';
          this.user_email = '';
          alert('Log in to view Cart.');
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_name = auth.displayName;
          this.user_email = auth.email;


        }
      }
    );
   }

  ngOnInit() {


    this.cart.GetItems(this.cart.userDisplayName);


    const cartRepository: CartRepository = new CartRepository();
    const iter: Iterator = cartRepository.getIterator(this.array);
    let count = 0;
    while (iter.next() != null) {

      count++;
    }

  }





async submitItems() {
  try {
    let totalval = this.cart.totalValue;
    console.log(totalval);
    await this.cart.submit();
    console.log('finished submital')
    this.cart.sendConfirmation();
    console.log('finished email')
    this.cart.DeleteItems();
    alert("Thank you for you order! Confirmation email sent to your inbox.");
  }
  catch {
    this.cart.DeleteItems();
    alert("Thank you for you order! Confirmation email sent to your inbox.");
  }
  
}

}
