import { Component, OnInit } from '@angular/core';
import {CustomerDetails} from '../CustomerDetails';
import {CustomerserviceService} from '../customerservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:CustomerDetails= new CustomerDetails();
  constructor(private service:CustomerserviceService) { }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  addCustomer(customer)
  { debugger;
    console.log(customer.valid);
   
    this.service.saveCustomer(this.customer).subscribe((data) => console.log(data));

  }
}
