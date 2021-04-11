import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44347/api/';

  constructor(private httpClient: HttpClient) { }
  
  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient
      .get<ListResponseModel<Brand>>(this.apiUrl+"brands/getall");
  }
  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)
  }
  deleteBrand(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/delete",brand)
  }
  GetById(id: number): Observable<ItemResponseModel<Brand>> {
    let newPath = `${this.apiUrl}brands/getbyid?id=${id}`;
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
  }
  updateBrand(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/update",brand)
  }
}
