import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Products } from 'src/app/models/product.model';
import { productUrl } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Products[]>(productUrl)
      .pipe(map((products) => products));
  }

  getProductById(id: number) {
    return this.httpClient
      .get<Products>(`${productUrl}/${id}`)
      .pipe(map((product) => product));
  }

  addProduct(product: any) {
    // let a = JSON.parse(JSON.stringify(product));
    return this.httpClient
      .post(`${productUrl}/create`, product)
      .pipe(map((newProduct) => newProduct));
  }

  delProduct(id: number) {
    return this.httpClient.put(`${productUrl}/delete/${id}`, id);
  }
}
