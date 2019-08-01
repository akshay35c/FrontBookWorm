import { ProductComponent } from './product/product.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = "http://localhost:8080/Customer/cart.do";
  private baseUrl1 ="http://localhost:8080/Customer/invoice.do";
  constructor(private http: HttpClient) {  }

  addcart(product: ProductComponent): Observable<object>{
    console.log(product);
    return this.http.post(this.baseUrl,product);
  }

    getfromcart():Observable<any>
    {
      return this.http.get("http://localhost:8080/Customer/GetAllCart.do");
    }

    deletefromcart(products:ProductComponent):Observable<Object>
    {
      console.log(products);
      return this.http.post("http://localhost:8080/Customer/delcart.do",products);
    }

    addInv(product: ProductComponent): Observable<object>{
      console.log(product);
      return this.http.post("http://localhost:8080/Customer/invoice.do",product);
    }

    getfromInv():Observable<any>
    {
      return this.http.get("http://localhost:8080/Customer/GetAllInvoice.do");
    }

    deletefromInv(products:ProductComponent):Observable<Object>
    {
      console.log(products);
      return this.http.post("http://localhost:8080/Customer/delinvoice.do",products);
    }

    deleteallcart():Observable<any>
    {
      return this.http.get("http://localhost:8080/Customer/deleteallcart.do");
    }

}




