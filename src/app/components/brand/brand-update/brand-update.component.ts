import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
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
  brand: Brand;
  brandUpdateForm: FormGroup;
  brandId:number;
  brandName:string;
  
  constructor(private formBuilder: FormBuilder,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private route:Router) { }

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe((params) => {
      if(params["id"]){
        this.GetById(params['id']);
        this.createBrandUpdateForm();
      }       
    });
  }

  createBrandUpdateForm(): void {
    this.brandUpdateForm = this.formBuilder.group({
      brandName: ["", Validators.required],
    });
  }

  GetById(id: number) {
    this.brandService.GetById(id).subscribe(response => {
      this.brand = response.data
      this.brandId= this.brand.brandId
      this.brandName = this.brand.brandName
    })
    
  }
  update() {
    if (this.brandUpdateForm.valid) {
      const brand = Object.assign({}, this.brandUpdateForm.value);
      brand.brandId = this.brand.brandId
      this.brandService.updateBrand(brand).subscribe(
        (response) => {
          this.toastrService.success(
            `Marka güncellendi: ${brand.brandName}`,
            'Başarılı'
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