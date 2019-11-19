import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Home } from '../patterns/template/home';
import { NavBar } from '../patterns/template/navbar';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Menu } from '../patterns/template/menu';
import { Cart } from '../patterns/template/cart';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CartService {
    public navBarValues: string[] = [];
    public isLoggedIn: boolean;
    public userDisplayName: string;
    public userEmail: string;
    public totalCustomers = 0;
    public array: any[] = [];
    public userName: string;
    public cartCount = 0;
    constructor(
      private afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
      private router: Router
    ) { }

    async GetItems(displayName: string) {
        const ref = this.db.database.ref('/cart/' + displayName);
        await ref.once('value').then((snap) => {
          if (snap.val() != null) {
            this.cartCount = Object.keys(snap.val()).length;
          }
          });
        }

   async getTotalCustomers() {
       console.log('in get customers');
       const ref = this.db.database.ref('/cart');
       await ref.once('value').then((snap) => {
        this.totalCustomers = Object.keys(snap.val()).length;
        console.log(this.totalCustomers);
        });
    }

    getTotalSales() {
      return 100;
    }
}
