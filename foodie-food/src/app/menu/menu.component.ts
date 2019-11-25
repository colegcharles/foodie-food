
import { Component, OnInit } from '@angular/core';
import { foodMaker } from '../patterns/facade/foodMaker';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CartService } from '../services/cartService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public numberOfIems = 0;
  private isLoggedIn: boolean;
  public array: any = [];
  public user_name: string;
  foodObject: AngularFireList<any>;
  foodItenRef$: AngularFireList<any>;
  breakfast: string[] = [];
  lunch: string[] = [];
  dinner: string[] = [];
  foodMaker = new foodMaker();
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private cart: CartService
  ) {
    for (let i = 0; i < 3; i++) {
      this.breakfast.push(this.foodMaker.getBreakfast()[i]);
      this.lunch.push(this.foodMaker.getLunch()[i]);
      this.dinner.push(this.foodMaker.getDinner()[i]);
      this.afAuth.authState.subscribe(
        (auth) => {
          if (auth == null) {
            this.user_name = '';
          } else {
            this.user_name = auth.displayName;
          }
        }
      );
    }
    this.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_name = '';
          alert('Log in to view Menu.');
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_name = auth.displayName;

        }
      }
    );
  }

  ngOnInit() {
  }

  addToCart(name: string, price: string){
    // this.foodObject = this.db.list('cart/' + this.user_name);

    this.cart.array.push({
      name: name,
      price: price
    });

    this.cart.GetItems(this.user_name);

}
}
