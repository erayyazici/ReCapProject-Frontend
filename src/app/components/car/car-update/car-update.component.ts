import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})

export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  car: Car;
  id:number;
  brandId:number;
  colorId:number;
  modelYear:number;
  dailyPrice:number;
  description:string;
  carName:string;

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.GetById(params['id']);
        this.createCarUpdateForm();
        this.getBrands();
        this.getColors();
      }
    });
  }

  GetById(id: number) {
    this.carService.GetById(id).subscribe((response) => {
      this.car = response.data;
      this.carName = this.car.carName
      this.id = this.car.id
      this.brandId = this.car.brandId
      this.colorId = this.car.colorId
      this.modelYear = this.car.modelYear
      this.dailyPrice = this.car.dailyPrice
      this.description = this.car.description
      console.log(this.dailyPrice)
    });
   
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors(): void {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createCarUpdateForm(): void {
    this.carUpdateForm = this.formBuilder.group({
      carName: ["", Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      modelYear: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  update(): void {
    if (this.carUpdateForm.valid) {
      const carModel = Object.assign({}, this.carUpdateForm.value);
      carModel.id = this.car.id
      this.carService.updateCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(
            `Araç güncellendi: ${carModel.carName}`,
            'Başarılı'
          );
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Dogrulama hatasi'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

}