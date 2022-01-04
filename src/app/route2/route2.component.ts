import { Component, OnInit } from '@angular/core';
import { productArray } from 'src/mock-objects/product-array';
import { Product } from "src/models/product";

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  constructor() {
    this.productArray = productArray;
  }
  ngOnInit(): void {
  }

  viewLayout = 'grid';
  productArray: Product[];
  filterTypes = ['price low to high', 'price high to low', 'popularity level', 'color name'];
  changeView(value: any) {
    if (value == 'price low to high') {
      this.productArray = this.productArray.sort(function (a, b) {
        return (Number(a.Price) - Number(b.Price));
      });
    }
    if (value == 'price high to low') {
      this.productArray = this.productArray.sort(function (a, b) {
        return (Number(b.Price) - Number(a.Price));
      });
    }
    if (value == 'popularity level') {
      this.productArray = this.productArray.sort(function (a, b) {
        return (Number(b.Popularity) - Number(a.Popularity));
      });
    }
    if (value == 'color name') {
      this.productArray = this.productArray.sort((a, b) => (a.Color > b.Color) ? 1 : -1);
    }
  }

  layoutView(value: any) {
    this.viewLayout = value;
  }

}
