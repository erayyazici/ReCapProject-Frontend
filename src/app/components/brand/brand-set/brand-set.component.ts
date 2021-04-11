import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-set',
  templateUrl: './brand-set.component.html',
  styleUrls: ['./brand-set.component.css']
})
export class BrandSetComponent implements OnInit {
  brands: Brand[] = [];
  constructor(private brandService:BrandService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(c => {
      this.brands = c.data;
    })
  }
  deleteBrand(brand:Brand){
    this.brandService.deleteBrand(brand).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      setTimeout(function() { window.location=window.location;},500);
    })
  }
}
