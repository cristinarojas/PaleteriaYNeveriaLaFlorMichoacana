import { Component, OnInit } from '@angular/core';

import productOneHome from '../../assets/data/productOneHome';
import productTwoHome from '../../assets/data/productTwoHome';
import productThreeHome from '../../assets/data/productThreeHome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productOneHome;
  public productTwoHome;
  public productThreeHome;

  constructor() { }

  ngOnInit() {
    this.productOneHome = productOneHome;
    this.productTwoHome = productTwoHome;
    this.productThreeHome = productThreeHome;
  }

}
