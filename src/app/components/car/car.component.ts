import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDetail[] = [];
  searchText:"";
  brandId:number;
  colorId:number;

  constructor(private carDetailService: CardetailService, private activatedRoute: ActivatedRoute, private route:Router,private toastrService: ToastrService, ) { }

  ngOnInit(): void {
    this.fillPage();
  }
  fillPage() {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"]);
      }
      else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"]);
      }
      else {
        this.getCars();
      }
    });
  }


  getCars() {
    this.carDetailService.GetCarDetails().subscribe(response => {
      this.cars = response.data
    })
  }

  setCurrentCar(car:CarDetail){
    this.route.navigate(["cars/detail/",car.id])
  }

  getCarsByBrand(brandId: number) {
    this.carDetailService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data
    })
  }
  getCarsByColor(colorId: number) {
    this.carDetailService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data
    })
  }
  staticFilesUrl = "https://localhost:44347/uploads/";

  SetImage(car:CarDetail){
    if (car.imagePath) {
      return `${this.staticFilesUrl}${car.imagePath}`;
    }else{
      return `${this.staticFilesUrl}defaultcar.jpg`;
    }
  }
  onColorChange(colorId:number){
    this.colorId = colorId;
  }
  onBrandChange(brandId:number){
    this.brandId=brandId;
  }
  applyFilters(){
     this.carDetailService.getCarDetailsByBrandNameAndColorName(this.brandId,this.colorId).subscribe(response=>{
       this.cars = response.data;
     })
}
}
