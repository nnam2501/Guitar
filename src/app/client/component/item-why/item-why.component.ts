import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-why',
  templateUrl: './item-why.component.html',
  styleUrls: ['./item-why.component.scss'],
})
export class ItemWhyComponent implements OnInit {
  @Input() icon?: string;
  @Input() name?: string;
  @Input() desc?: string;
  constructor() {}

  ngOnInit(): void {}
}
