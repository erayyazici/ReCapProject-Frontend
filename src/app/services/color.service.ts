import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44347/api/';
  constructor(private httpClient: HttpClient) { }
  
  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClient
      .get<ListResponseModel<Color>>(this.apiUrl+"colors/getall");
  }
  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)
  }
  deleteColor(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/delete",color)
  }
  GetById(id: number): Observable<ItemResponseModel<Color>> {
    let newPath = `${this.apiUrl}colors/getbyid?id=${id}`;
    return this.httpClient.get<ItemResponseModel<Color>>(newPath);
  }
  updateColor(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/update",color)
  }
}
