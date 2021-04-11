import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44347/api/";

  GetCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getcardetails`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getbybrand?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getbycolor?colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  GetCarDetailById(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getcardetail?id=${id}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByBrandNameAndColorName(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}cars/getbybrandandcolor?brandId=${brandId}&colorId=${colorId}`
    );
  }
}