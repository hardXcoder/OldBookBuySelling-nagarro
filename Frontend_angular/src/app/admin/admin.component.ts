import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DataService]
})
export class AdminComponent implements OnInit {

  message = "Loading...."

  constructor(private dataService: DataService,
    private user: UserService) { }

  ngOnInit() {
    
  }

 
  addToListing(sellerid,name,author,img,price,condition,category,sellerEmail)
  {
    alert("Book has been successfully added to inventory")
    console.log(name)

    this.dataService.addToListing(1,name,author,img,price,condition,category,sellerEmail);

  }





}
