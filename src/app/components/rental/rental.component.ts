import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
  providers: [DatePipe],
})
export class RentalComponent implements OnInit {

  customers:Customer[];
  customerId:number;
  rentDate: Date;
  returnDate : Date;
  @Input() car : CarDetail;
  

  minDate: string | any;
  maxDate: string | null;
  maxMinDate: string | null;
  firstDateSelected: boolean = false;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private toastrService: ToastrService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  getRentMinDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }

  getReturnMinDate() {
    if (this.rentDate != undefined) {
      let stringToDate = new Date(this.rentDate);
      let new_date = new Date();
      new_date.setDate(stringToDate.getDate() + 1);
      return new_date.toISOString().slice(0, 10);
    } else {
      return this.rentDate;
    }
  }
  getReturnMaxDate() {
    this.maxDate = this.datePipe.transform(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'yyyy-MM-dd'
    );
    return this.maxDate;
  }
  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }
  createRental() {
    let MyRental: Rental = {
      carId : this.car.id,
      brandName : this.car.brandName,
      colorName : this.car.colorName,
      carDailyPrice : this.car.dailyPrice,
      carDescription : this.car.description,
      customerId : this.customerId,
      rentDate : this.rentDate,
      returnDate : this.returnDate,
    };
    if (MyRental.customerId == undefined ) {
      this.toastrService.error("Müşteri kısmı boş bırakılamaz","Lütfen bilgileri eksiksiz giriniz.")
    }
    else if (MyRental.rentDate == undefined) {
      this.toastrService.error("Başlangıç tarihi boş bırakılamaz","Lütfen bilgileri eksiksiz giriniz.")
    }
    else if (MyRental.returnDate == undefined) {
      this.toastrService.error("Bitiş tarihi boş bırakılamaz","Lütfen bilgileri eksiksiz giriniz.")
    }   
    else{
      this.router.navigate(['/payment/', JSON.stringify(MyRental)]);
      this.toastrService.info(
        'Ödeme sayfasına yönlendiriliyorsunuz...',
        'Ödeme İşlemleri'
      );
    }
  }
  setCustomerId(customerId: string) {
    this.customerId = +customerId;
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
}