import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap,Router} from "@angular/router";
import { DataService } from '../data.service';


@Component({
  selector: 'app-getmessage',
  templateUrl: './getmessage.component.html',
  styleUrls: ['./getmessage.component.css']
})
export class GetmessageComponent implements OnInit {

  constructor(private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
  }

  storeMessage(message){

    this.dataService.storeMessage(message,this.dataService.IsSellerId,
      this.dataService.IsCurrentId,this.dataService.IsBookId,
      this.dataService.IsBookImg,this.dataService.IsBookName,this.dataService.IsReplyTo);
 
    alert("Message Sent !");

    this.location.back();
  }

}
