import { Component, OnInit } from '@angular/core';
import item from '../../../shared/data/item-products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  new: any;
  top: any;
  constructor() {}

  ngOnInit(): void {
    item.find((item: any) => {
      if (item.type === 'new') this.new = item.datas;
      if (item.type === 'top') this.top = item.datas;
    });
    console.log(this.new);
    console.log(this.top);
  }
}
