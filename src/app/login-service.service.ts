import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CustomerDetails } from "./CustomerDetails";

@Injectable({
  providedIn: "root"
})
export class LoginServiceService {
  private baseUrl = "http://localhost:8080/Customer/Validuser.do";
  constructor(private http: HttpClient) {}

  searchUser(customer: CustomerDetails): Observable<Object> {
    console.log(customer);
    return this.http.post(this.baseUrl, customer);
  }
}
