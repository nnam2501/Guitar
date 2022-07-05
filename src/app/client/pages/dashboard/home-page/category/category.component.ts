import { Component, OnInit } from '@angular/core';
import item from '../../../../../shared/data/item-category.json';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  data: any = item;
  constructor() {}

  ngOnInit(): void {
    this.data = item;
  }
}
