import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-set',
  templateUrl: './car-set.component.html',
  styleUrls: ['./car-set.component.css']
})
export class CarSetComponent implements OnInit {
  cars: Car[] 
  constructor(private carService:CarService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }
  deleteCar(car:Car){
    this.carService.deleteCar(car).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      setTimeout(function() { window.location=window.location;},500);
    })
  }
}
