import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServicesService } from 'src/app/shared/services/all-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: AllServicesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  id: any;
  data: any = {};
  loading: boolean = false;

  getProduct() {
    this.loading = true;
    this.service.getProductById(this.id).subscribe(
      (res) => {
        this.loading = false;
        this.data = res;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
}
