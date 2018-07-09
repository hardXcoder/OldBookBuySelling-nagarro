import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { DataService } from '../data.service';

import { BookData } from '../bookdata';



@Component({
  selector: 'app-itemdesc',
  templateUrl: './itemdesc.component.html',
  styleUrls: ['./itemdesc.component.css']
})
export class ItemdescComponent implements OnInit {

  selected: number;

  bookdesc: BookData;




  constructor(private router: ActivatedRoute,
    private route: Router,
    private dataService: DataService) { }

  ngOnInit() {

    this.router.paramMap.subscribe((params: ParamMap) => {
      this.selected = +(params.get('id'));
      console.log("ujjwal again")
      console.log(this.selected);
    });

    // this.displayItem(this.selected);

    this.dataService.getItemfromInventoryById(this.selected)
      .subscribe(datas => {
        console.log("hello originial")

        console.log(datas);

        console.log("hello banal")


        this.bookdesc = datas

        console.log(this.bookdesc)

      })

  }

  // displayItem(id)
  // {

  //   this.dataService.getItemfromInventoryById(id)
  //   .subscribe(datas =>{
  //     console.log("hello originial")

  //     console.log( datas);

  //     console.log("hello banal")


  //     this.bookdesc = datas

  //     console.log(this.bookdesc) 

  //   })


  // }

  contactSeller() {

    console.log(this.bookdesc[0].seller_id);

    var sender_email = this.dataService.IsCurrentId;
    console.log(sender_email);

    var reciever_id = this.bookdesc[0].seller_id;
    var book_id = this.bookdesc[0].book_id;

    console.log("singham")

    console.log(this.bookdesc[0].book_name)

    this.dataService.setSellerId(this.bookdesc[0].seller_id)
    this.dataService.setBookId(this.bookdesc[0].book_id)
    this.dataService.setBookName(this.bookdesc[0].book_name)
    this.dataService.setBookImg(this.bookdesc[0].img)
    this.dataService.setSellerEmail(this.bookdesc[0].seller_email)





    this.route.navigate(['/getmessage'])

  }

  buyNow() {

    alert("Thank You for shopping with us !")
  }

  addToCart() {

    // If local storage is not null , then add to cart results in picking the Id
    // from local storage and putting it in the cart with currId from localstorage
    if (localStorage.currId != null) {

      alert("Book has been added to your cart!")

      this.dataService.addToCart(this.bookdesc[0], localStorage.currId)

    } else {

      alert("Please log in to your account!")
      this.route.navigate(['/signIn'])

    }

  }


}
