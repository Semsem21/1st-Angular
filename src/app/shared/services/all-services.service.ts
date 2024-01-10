import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllServicesService {
  constructor(private http: HttpClient) {}

  /* ===================== (*_*) ===================== */

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }

  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getProductsByCategory(keyword: string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyword);
  }

  getProductById(id: any) {
    return this.http.get(environment.baseApi + 'products/' + id);
  }

  /* ===================== (*_*) ===================== */

  createProduct(model: any) {
    return this.http.post(environment.baseApi + 'products', model);
  }

  deleteCart(id: number) {
    return this.http.delete(environment.baseApi + 'carts/' + id);
  }

  createNewCart(model: any) {
    return this.http.post(environment.baseApi + 'carts', model);
  }

  getAllCarts(param?: any) {
    let params = new HttpParams();
    params = params
      .append('startDate', param?.start)
      .append('endDate', param?.end);
    return this.http.get(environment.baseApi + 'carts', { params });
  }
}
