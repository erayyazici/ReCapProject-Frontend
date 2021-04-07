import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { Image } from 'src/app/models/image';
import { CardetailService } from 'src/app/services/cardetail.service';
import { RentCarService } from 'src/app/services/rentCar.service';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails: CarDetail[] = []
  images: Image[] = []
  dataLoaded = false;

  constructor(private carDetailService: CardetailService, private imageService: ImageService, private activatedRoute: ActivatedRoute, private toastrService:ToastrService, private rentCarService:RentCarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.GetCarDetailById(params["id"])
        this.GetImagesByCarId();
      }
    })
  }

  GetCarDetailById(id: number) {
    this.carDetailService.GetCarDetailById(id).subscribe(Car => {
      this.carDetails = Car.data;
    })
  }

  GetImagesByCarId() {
    this.imageService.GetImagesByCarId(this.activatedRoute.snapshot.params["id"]).subscribe(Images => {
      this.images = Images.data;
      console.log(Images.data)
    })
  }
  getCarDetailsByBrandNameAndColorName(brandId: number, colorId: number) {
    this.carDetailService
      .getCarDetailsByBrandNameAndColorName(brandId, colorId)
      .subscribe((response) => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      });
  }
  rentCar(carDetails: CarDetail) {
    this.toastrService.success("Sepete eklendi", carDetails.carName)

  }
}