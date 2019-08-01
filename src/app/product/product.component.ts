import { CartService } from './../cart.service';
import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "../product-service.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})


export class ProductComponent {
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

  ProductComponent$;
  constructor(private service: ProductServiceService,private Cartservice:CartService) {
    this.ProductComponent$ = service.getProduct();
  }

  /* listProduct: ProductComponent[];
  ngOnInit() {
    this.service.getProduct().subscribe((data) => {
      this.listProduct = data;
    });
  }*/

  addtocart(Prdt:ProductComponent)
  {
    this.Cartservice.addcart(Prdt).subscribe((data) => console.log(data));
    debugger;
    this.addinv(Prdt);
  }

  addinv(Prdt:ProductComponent)
  {

    console.log("hello")
    debugger;
    //this.Cartservice.addInv(Prdt).subscribe((data) => console.log(data));
  }


}




