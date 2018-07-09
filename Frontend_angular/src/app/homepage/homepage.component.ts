import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Footer2Component } from '../footer2/footer2.component';
import { Middle2Component } from '../middle2/middle2.component';
import { Header2Component } from '../header2/header2.component';


import {BookData} from '../bookdata';
import { DataService } from '../data.service';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DataService]
})

export class HomepageComponent implements OnInit {

  // this is the dummy user made , until the user authentication is made 
  currentUser : number = 1 ;

  bookArray : BookData[];


  constructor(private router: ActivatedRoute,
    private route: Router,
    private dataService: DataService) { }

    ngOnInit(){
      
    }

  // ngOnInit() {

  //   this.dataService.showAllInventory()
  //   .subscribe(datas =>{
  //     console.log("boiled inventory******************")

  //     console.log( datas);

  //     console.log("cooled inventory******************")


  //     this.bookArray = datas
  //     console.log(this.bookArray) 

  //   })

  // }

  // addToCart(i){

  //   alert("Book has been added to cart")

  //   console.log(this.bookArray[i])
  //   // this.route.navigate(['/cart']);
  //   this.dataService.addToCart(this.bookArray[i],this.currentUser)
  // }

  
}
