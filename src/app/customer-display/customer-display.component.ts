import { CustomerDetails } from "./../CustomerDetails";
import { Component, OnInit } from "@angular/core";
import { CustomerserviceService } from "../customerservice.service";

@Component({
  selector: "app-customer-display",
  templateUrl: "./customer-display.component.html",
  styleUrls: ["./customer-display.component.css"]
})
export class CustomerDisplayComponent implements OnInit {
  constructor(private service: CustomerserviceService) {}
  lstuser: CustomerDetails[];
  ngOnInit() {
    this.service.getuser().subscribe((data) => {
      this.lstuser = data;
    });
  }
}
