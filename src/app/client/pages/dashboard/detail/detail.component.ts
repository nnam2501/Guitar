import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { getProductsSelector } from 'src/app/core-store/products/products.selector';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  product: any;

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store
  ) {}

  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFormRouter = Number(routerParams.get('id'));

    this.store
      .select(getProductsSelector)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: any) => {
        let productTmp;
        productTmp = data.products.filter(
          (item: any) => item.id === productIdFormRouter
        );
        this.product = productTmp[0];
        console.log(this.product);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }
}
