import { Component, OnInit, OnDestroy } from '@angular/core';
import item from '../../../../../shared/data/item-products.json';
import { ProductService } from '../../../../../shared/services/product/product.service';
import {
  loadProducts,
  loadProductsSuccess,
} from '../../../../../core-store/products/products.actions';
import { Store } from '@ngrx/store';
import { getProductsSelector } from 'src/app/core-store/products/products.selector';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  // products$ = this.store.select(getProducts);
  new: any;
  top: any;
  data: any;
  unSub: any;

  private ngUnsubcribe = new Subject<void>();

  constructor(private api: ProductService, private store: Store) {}

  ngOnInit(): void {
    item.find((item: any) => {
      if (item.type === 'new') this.new = item.datas;
      if (item.type === 'top') this.top = item.datas;
    });
    // this.api
    //   .getAll()
    //   .pipe(takeUntil(this.ngUnsubcribe))
    //   .subscribe((data: any) => {
    //     this.store.dispatch(loadProductsSuccess({ products: data }));
    //     this.data = data;
    //   });
    this.store.dispatch(loadProducts());
    this.store
      .select(getProductsSelector)
      .pipe(takeUntil(this.ngUnsubcribe))
      .subscribe((res) => {
        this.data = res.products;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubcribe.next();
    this.ngUnsubcribe.unsubscribe();
  }
}
