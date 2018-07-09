import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  success :boolean,
  message :string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }

  getSomeData(){

      const uri = 'http://localhost:3000/api/getsomedata';

    return this.http.get<myData>(uri);
  }
}
