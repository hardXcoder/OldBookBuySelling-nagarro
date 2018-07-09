import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';


import { MessageData } from '../messagedata';



@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css'],
  providers: [DataService]
})

export class MessageboxComponent implements OnInit {

  data: MessageData[];


  constructor(private dataService: DataService,
    private router: Router,) { }

  ngOnInit() {

    console.log("In the messagebox component")
    console.log("very good boy^^^^^^^^^^^^^^^^^^^^^^^^")

    if (this.dataService.IsLoggedIn) {

   
      this.dataService.getMessages(this.dataService.IsCurrentId)
        .subscribe(datas => {
         
          this.data = datas
          
          console.log("badshah")
          
          console.log(this.data)
        })
      }
      else {
        this.router.navigate(['/signIn'])
      }


  }

  replyToSender(i){

    console.log("I am in reply mode")
    console.log(this.data[i])

    this.dataService.setReplyTo(this.data[i].sender_email)


    this.router.navigate(['/getmessage'])

    // alert("Message has been sent !")
  }

  clearMessage(){

    this.data.splice(0)
    this.dataService.clearMessages(this.dataService.IsCurrentId);
  }

}
