import { Component, OnInit } from '@angular/core';
import item from '../../../../../shared/data/item-why.json';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
})
export class WhyComponent implements OnInit {
  data: any = item;
  constructor() {}

  ngOnInit(): void {
    this.data = item;
  }
}
