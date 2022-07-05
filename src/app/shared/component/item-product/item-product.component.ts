import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
})
export class ItemProductComponent implements OnInit {
  @Input() img?: string;
  @Input() name?: string;
  @Input() price?: string;
  constructor() {}

  ngOnInit(): void {}
}
