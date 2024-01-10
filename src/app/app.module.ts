import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HeaderComponent } from './shared/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './public/cart/cart.component';
import { AllProductsComponent } from './public/products/all-products/all-products.component';
import { EachProductComponent } from './public/products/each-product/each-product.component';
import { ProductDetailsComponent } from './public/products/product-details/product-details.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FullPageComponent } from './admin/full-page/full-page.component';
import { ViewCartsComponent } from './admin/view-carts/view-carts.component';
import { SelectComponent } from './admin/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    CartComponent,
    AllProductsComponent,
    EachProductComponent,
    ProductDetailsComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    FullPageComponent,
    ViewCartsComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
