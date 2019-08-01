import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http:HttpClient) { }

  //service method for display product
  getProduct():Observable<any>
  {
    return this.http.get("http://localhost:8080/Customer/GetAllProduct.do");
  }

  getEbookProduct():Observable<any>
  {
    return this.http.get("http://localhost:8080/Customer/GetEbook.do");
  }

  getAudioProduct():Observable<any>
  {
    return this.http.get("http://localhost:8080/Customer/GetAudio.do");
  }
}
