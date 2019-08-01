import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-myshelf',
  templateUrl: './myshelf.component.html',
  styleUrls: ['./myshelf.component.css']
})
export class MyshelfComponent implements OnInit {
  lstuser:ProductComponent[];
  constructor(private Cartservice:CartService) { 

  }

  ngOnInit() {
    this.Cartservice.getfromInv().subscribe((data) => {
      this.lstuser = data;
    });

  }

}
