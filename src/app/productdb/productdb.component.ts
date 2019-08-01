import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { CartService } from '../cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: '`app-productdb`',
  templateUrl: './productdb.component.html',
  styleUrls: ['./productdb.component.css']
})
export class ProductdbComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  imageWidth: number = 150;
  imageLeftMargin: number = 25;
  imageH: number = 170;

  P_product_id: number;
  P_name: string;
  P_type: string;
  P_category_id: number;
  P_language_id: number;
  P_mrp: number;
  P_SP: number;
  P_desc: string;
  P_author: string;
  P_image: string;
  P_Rent: string;
  P_lib: string;
  P_rentamt: number;
  P_rentmindays: number;
  P_publisher: string;
  P_Fdate: Date;
  P_tdate: Date;

  ProductdbComponent$;
  constructor(private service: ProductServiceService,private Cartservice:CartService) {
    this.ProductdbComponent$ = service.getProduct();
  }

  /* listProduct: ProductComponent[];
  ngOnInit() {
    this.service.getProduct().subscribe((data) => {
      this.listProduct = data;
    });
  }*/

  addtocart(Prdt:ProductComponent)
  {
    this.Cartservice.addcart(Prdt).subscribe((data) => console.log(data))
  }

}
