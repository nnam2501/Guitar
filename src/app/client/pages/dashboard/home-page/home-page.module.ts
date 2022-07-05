import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ItemCategoryComponent } from '../../../component/item-category/item-category.component';
import { ItemProductComponent } from '../../../component/item-product/item-product.component';
import { ItemWhyComponent } from '../../../component/item-why/item-why.component';
import { WhyComponent } from './why/why.component';
import { DownloadComponent } from './download/download.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ItemCategoryComponent,
    ItemProductComponent,
    ItemWhyComponent,
    WhyComponent,
    DownloadComponent,
    BrandsComponent,
    ProductComponent,
    CategoryComponent,
    ReviewComponent,
  ],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
