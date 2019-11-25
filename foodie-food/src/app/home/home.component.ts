

import { Component, OnInit } from '@angular/core';
import { Steps } from '../patterns/decorator/steps';
import { StepDecorator } from '../patterns/decorator/stepDecorator';
import { StepOne } from '../patterns/decorator/stepOne';
import { StepTwo } from '../patterns/decorator/stepTwo';
import { StepThree } from '../patterns/decorator/stepThree';
import { StepFour } from '../patterns/decorator/stepFour';
import { CartService } from '../services/cartService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  step1: string;
  step2: string;
  step3: string;
  step4: string;

  isCollapsed = true;
  next1 = true;
  next2 = true;
  next3 = true;
  about = true;
  patterns = true;

  constructor(
    public cart: CartService
  ) { }

  ngOnInit() {
    this.step1 = (new StepOne(new StepDecorator())).decorate();
    this.step2 = (new StepTwo(new StepDecorator())).decorate();
    this.step3 = (new StepThree(new StepDecorator())).decorate();
    this.step4 = (new StepFour(new StepDecorator())).decorate();

  }

  start() {
    this.isCollapsed = !this.isCollapsed;
    this.about = true;
    this.patterns = true;
  }

  Next1() {
    this.next1 = false;
  }

  Next2() {
    this.next2 = false;
  }

  Next3() {
    this.next3 = false;
  }

  About() {
    this.cart.getTotalCustomers();
    this.cart.getTotalOrderAmount();
    this.isCollapsed = true;
    this.about = false;
    this.patterns = true;
  }

  Patterns() {
    this.isCollapsed = true;
    this.about = true;
    this.patterns = !this.patterns;
  }



}
