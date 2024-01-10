import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/shared/services/all-services.service';
import { Product } from 'src/app/shared/services/product';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(
    private service: AllServicesService,
    private build: FormBuilder
  ) {}

  ngOnInit(): void {
    let myChart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
          },
        },
      },
    });

    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    this.getProducts();
    this.getCategories();
  }

  eventDate: any = formatDate(new Date(), 'MMM dd, yyyy', 'en');

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  base64: any = '';
  form!: FormGroup;

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }

  getCategories() {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (error) => {
        alert(error);
      }
    );
  }

  getSelectedCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
    console.log(this.form);
  }

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue(this.base64);
    };
  }

  addProduct() {
    const model = this.form.value;
    this.service.createProduct(model).subscribe((res) => {
      alert('Add Product Success');
    });
  }
}
