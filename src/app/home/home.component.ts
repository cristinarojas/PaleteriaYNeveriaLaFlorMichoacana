import { Component, OnInit } from '@angular/core';

import homeData from '../../assets/data/homeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public homeData;

  constructor() { }

  ngOnInit() {
    this.homeData = homeData;
  }

}
