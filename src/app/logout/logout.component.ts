import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(private service:CartService){}

  ngOnInit() {
    this.service.deleteallcart().subscribe();
  }
}
