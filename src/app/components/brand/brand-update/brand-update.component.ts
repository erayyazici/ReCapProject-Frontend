import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;
  brand: Brand;
  constructor(private formBuilder: FormBuilder,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private route:Router) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        this.GetById(params['id']);
    });
  }
  createBrandUpdateForm(): void {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brand.brandId],
      brandName: [this.brand.brandName, Validators.required],
    });
  }

  GetById(id: number) {
    this.brandService.GetById(id).subscribe(response => {
      this.brand = response.data
      this.createBrandUpdateForm();
    })
  }
  update() {
    if (this.brandUpdateForm.valid) {
      const brand = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.updateBrand(brand).subscribe(
        (response) => {
          this.toastrService.success(
            `Marka guncellendi: ${brand.brandName}`,
            'Basarili'
          );
          this.route.navigate(["brands/set/"])
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
    }
  }
}