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
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class CartService {
    public navBarValues: string[] = [];
    public isLoggedIn: boolean;
    public userDisplayName: string;
    public userEmail: string;
    public totalCustomers = 0;
    public totalOrders = 0;
    public array: any[] = [];
    public userName: string;
    public cartCount = 0;
    public totalValue = 0;
    constructor(
      private afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
      private router: Router,
      private http: HttpClient
    ) { }

    async GetItems(displayName: string) {

        this.cartCount = this.array.length;
        this.totalValue = 0;
          for (let i = 0; i < this.array.length; i++) {
            this.totalValue = this.totalValue + Number(this.array[i].price);
          }
        }
       
        async DeleteItems() {
          this.array = [];
          this.totalValue = 0;
          this.cartCount = 0;
        }

   async getTotalCustomers() {
       const ref = this.db.database.ref('/cart');
       await ref.once('value').then((snap) => {
        this.totalCustomers = Object.keys(snap.val()).length;
        });
    }

    async getTotalOrderAmount() {
      let totalval = 0;

      const ref = this.db.database.ref('/totalOrders');
      await ref.once('value').then(function (snap) {
        for (let i = 0; i < Object.keys(snap.val()).length; i++) {
          totalval = totalval + Number(snap.val()[Object.keys(snap.val())[i]].price);
        }
     });
     this.totalOrders = totalval;
    }
    

  async submit() {
    console.log('username: ' + this.userDisplayName);
    let totalOrders = this.db.list('/totalOrders');
    let foodObject = this.db.list('cart/' + this.userDisplayName);
    for (let i = 0; i < this.array.length; i++) {
      await totalOrders.push({price:this.array[i].price});
      await foodObject.push({
        name: this.array[i].name,
        price: this.array[i].price
      });
    }
    
  }

    async sendConfirmation() {
      let sendEmail = firebase.functions().httpsCallable('sendEmail');
      try {
        console.log(this.userEmail);
        console.log(this.userDisplayName);
        console.log(this.totalValue);
        await sendEmail({dest: this.userEmail, username: this.userDisplayName, total: this.totalValue}).then(function(result) {
          console.log(result);
        });
      }
      catch(error) {
        console.log(error);
      }
      
      //let response = await this.http.get(`https://us-central1-foodie-food-ed88d.cloudfunctions.net/sendMail?dest=${to}&username=${username}&total=${total}`).toPromise();
    }
}
