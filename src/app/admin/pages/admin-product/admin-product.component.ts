import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { loadProducts } from 'src/app/core-store/products/products.actions';
import {
  getProducts,
  getProductsSelector,
} from 'src/app/core-store/products/products.selector';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { AddDialogComponent } from '../../components/add-dialog/add-dialog.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  displayedColumns: string[] = [
    'id',
    'title',
    'imageUrl',
    'createdAt',
    'updatedAt',
    'actions',
  ];
  dataSource = [];
  constructor(
    private store: Store,
    private productService: ProductService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.store
      .select(getProductsSelector)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.dataSource = res.products;
      });
  }

  onAdd() {
    this.dialogService
      .open(AddDialogComponent, { closeOnBackdropClick: false })
      .onClose.subscribe((res) => {
        // console.log(res);

        if (res !== undefined) {
          //add product
          this.productService
            .addProduct(res)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((res1: any) => {
              console.log(res1);
            });

          //get id of new product from db
          // this.productService
          //   .getAll()
          //   .pipe(takeUntil(this.ngUnsubscribe))
          //   .subscribe((data: any) => {
          //     let pos = data.length - 1;
          //     console.log(data[pos]);
          //   });
        }
      });
  }

  onDelete(id: any) {
    this.productService
      .delProduct(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => console.log('del success'));
  }

  // fetchData() {
  //   this.productService.getAll().subscribe((data: any) => {
  //     this.dataSource = data;
  //   });
  // }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }
}
