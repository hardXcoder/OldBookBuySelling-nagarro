import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  success :boolean,
  message :string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logstatus =false;

  constructor(private http :HttpClient) { 

  }

  setLogStatus(value : boolean){
    this.logstatus=true;
  }

  get IsLoggedIn() {
    return this.logstatus;
  }



  getUserDetails(username,password){

     const uri = 'http://localhost:3000/api/getuser';

    return this.http.post<myData>(uri,{
      username,
      password
    })
  }

  
}
