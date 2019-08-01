import { Injectable } from '@angular/core';
import { CustomerDetails } from './CustomerDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  private baseUrl = 'http://localhost:8080/Customer/customer.do';

  constructor(private http:HttpClient) { }

  //service method to add customer using registration form
  saveCustomer(customer:CustomerDetails): Observable<Object>
  {
   console.log(customer);
    debugger;
    return this.http.post(this.baseUrl,customer);
  }

  //service method for display customer
  getuser():Observable<any>
  {
    return this.http.get("http://localhost:8080/Customer/GetAllCustomers.do");
  }
}
