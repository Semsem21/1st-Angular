import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './public/products/all-products/all-products.component';
import { ProductDetailsComponent } from './public/products/product-details/product-details.component';
import { CartComponent } from './public/cart/cart.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { FullPageComponent } from './admin/full-page/full-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'dash', component: FullPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
