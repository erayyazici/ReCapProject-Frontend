import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandSetComponent } from './components/brand/brand-set/brand-set.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarSetComponent } from './components/car/car-set/car-set.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/car/cardetail/cardetail.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorSetComponent } from './components/color/color-set/color-set.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/detail/:id", component: CardetailComponent },
  { path: "payment/:rental", component: PaymentComponent },
  { path: "rental/:carId", component: RentalComponent },
  { path: "rentals", component: RentalComponent },
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"brands/set",component:BrandSetComponent},
  {path:"cars/set",component:CarSetComponent},
  {path:"colors/set",component:ColorSetComponent},
  {path:"cars/update/:id",component:CarUpdateComponent},
  {path:"brands/update/:id",component:BrandUpdateComponent},
  {path:"colors/update/:id",component:ColorUpdateComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
