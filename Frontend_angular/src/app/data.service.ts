import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { Data } from './data';
import { CartData } from './cartdata';
import { BookData } from './bookdata';
import { MessageData } from './messagedata';


interface myData {
  success: boolean,
  message: string
}

interface myData2 {
  success: boolean,
  message: string,
  user_email: string
}



@Injectable({
  providedIn: 'root'
})

export class DataService {

  private logstatus = JSON.parse(localStorage.getItem('loggedIn')||'false')
  
  private currentId =  localStorage.getItem('currId')

  private sellerId =  localStorage.getItem('sellerId')

  private bookId =  localStorage.getItem('bookId')

  private bookName =  localStorage.getItem('bookName')

  private bookImg =  localStorage.getItem('bookImg')

  private sellerEmail =  localStorage.getItem('seller_email')

  private replyEmail =  localStorage.getItem('reply_email')








  constructor(private http: HttpClient) { }


  getItemfromInventoryById(id) {

    console.log("ujjwal in getitembyid funct data service")

    const uri = 'http://localhost:3000/api/getitembyId/:id';

    console.log(uri);

    var idstring: string = "" + id;
    console.log(typeof idstring)

    let data = { id: idstring };

    return this.http.get<BookData>(uri, { params: data });

  }


  showCart(user_email): Observable<CartData[]> {

    const uri = 'http://localhost:3000/api/cartbyId/:id';

    var idstring: string = "" + user_email;


    console.log(typeof idstring)

    console.log(idstring)


    let data = { id: idstring };

    console.log(data)

    return this.http.get<CartData[]>(uri, {params : data});

  }


  showAllInventory(): Observable<BookData[]> {

    console.log("ujjwal in listings funct data service")


    const uri = 'http://localhost:3000/api/listings';

    console.log(this.http.get<Data[]>(uri));

    return this.http.get<BookData[]>(uri);


  }


  showByCategory(category): Observable<BookData[]> {

    console.log("ujjwal in listings funct data service")


    const uri = 'http://localhost:3000/api/listingsCategory';

    var idstring: string = "" + category;
    
    console.log(typeof idstring)

    let data = { id: idstring };

    return this.http.get<BookData[]>(uri,{params : data});


  }

  showByName(name): Observable<BookData[]> {

    console.log("ujjwal in listings funct data service")


    const uri = 'http://localhost:3000/api/listingsName';

    var idstring: string = "" + name;
    
    console.log(typeof idstring)

    let data = { id: idstring };

    return this.http.get<BookData[]>(uri,{params : data});


  }

  showByPrice(price): Observable<BookData[]> {

    console.log("ujjwal in listings funct data service")


    const uri = 'http://localhost:3000/api/listingsPrice';

    var idstring: string = "" + price;
    
    console.log(typeof idstring)

    let data = { id: idstring };

    return this.http.get<BookData[]>(uri,{params : data});


  }

  showByCondition(cond): Observable<BookData[]> {

    console.log("ujjwal in listings funct data service")


    const uri = 'http://localhost:3000/api/listingsCondition';


    var idstring: string = "" + cond;
    
    console.log(typeof idstring)

    let data = { id: idstring };

    return this.http.get<BookData[]>(uri,{params : data});


  }

  showByAuthor(author): Observable<BookData[]> {

    console.log("ujjwal in author funct data service")

  console.log(author)


    const uri = 'http://localhost:3000/api/listingsAuthor';

    console.log("hut")


    var idstring: string = author;
    
    console.log(typeof idstring)

    let data = { id: idstring };

    console.log(data)

    return this.http.get<BookData[]>( uri, {params : data});


  }



  addToCart(bookinfo, useremail) {

    console.log("ujjwal in addttoCart  data service")

    const uri = 'http://localhost:3000/api/addtocart';

    //creating the cart object by adding the user
    var obj = {
      buyer_email: useremail,
      book_id: bookinfo.book_id,
      seller_id: bookinfo.seller_id,
      book_name: bookinfo.book_name,
      author_name: bookinfo.author_name,
      img: bookinfo.img,
      price: bookinfo.price,
      quantity:bookinfo.quantity,
      seller_email:bookinfo.seller_email

    }


    this.http.post(uri, obj)
      .subscribe(res => console.log("done"))
  }


  removeFromCart(order_id, user_email) {

    console.log("ujjwal in removefrom cart  data service")


    const uri = 'http://localhost:3000/api/removefromcart';

    var obj = {
      order_id: order_id,
      user_email: user_email
    }

    this.http.post(uri, obj)
      .subscribe(res => console.log("done"))
  }


  addToListing(sellerid, name, author, img, price, condition, category,sellerEmail) {

    console.log("ujjwal in addtoListing  data service")

    const uri = 'http://localhost:3000/api/addtolisting';

    console.log("-------------------------------------")

    // console.log(this.http.get<Data[]>(uri));

    var obj = {

      book_name: name,
      author_name: author,
      img: img,
      price: price,
      book_condition: condition,
      category: category,
      seller_email:sellerEmail
    }

    console.log(obj)

    this.http.post(uri, obj)
      .subscribe(res => console.log("done"))
  }



  addUserDetails(name, email, college, address, number, password) {

    const uri = 'http://localhost:3000/api/adduser';

    console.log("i am down here")

    var obj = {
      name: name,
      email: email,
      college: college,
      address: address,
      phoneNumber: number,
      password: password
    }

    return this.http.post<myData2>(uri, obj);

  }


  checkUserDetails(email, password) {

    const uri = 'http://localhost:3000/api/checkuser';

    var obj = {

      email: email,
      password: password
    }

    return this.http.post<myData2>(uri, obj)

  }

  incOrder(book_id,buyer_email,quantity){

    const uri = 'http://localhost:3000/api/incorder';
    

    var obj ={
      book_id : book_id,
      buyer_email:buyer_email,
      quantity:quantity
    }

    this.http.post(uri, obj)
      .subscribe(res => console.log("done"))

  }

  decOrder(order_id,book_id,buyer_email,quantity){

    const uri = 'http://localhost:3000/api/decorder';
    

    var obj ={
      order_id:order_id,
      book_id : book_id,
      buyer_email:buyer_email,
      quantity:quantity
    }

    this.http.post(uri, obj)
      .subscribe(res => console.log("done"))

  }

  storeMessage(message,seller_id,currentId,book_id,img,book_name,seller_email){

    const uri = 'http://localhost:3000/api/storemessage';

    var obj = {
      message:message,
      sender_email:currentId,
      reciever_id:seller_id,
      book_id: book_id,
      img:img,
      book_name: book_name,
      seller_email:seller_email
    }

    console.log("jai bajrang bali")
    console.log(obj)
    
    this.http.post(uri, obj)
    .subscribe(res => console.log("done"))

  }

  getMessages(currEmail){

    console.log("ujjwal in getmessage funct data service")

    const uri = 'http://localhost:3000/api/getmessages';

    var idstring: string = "" + currEmail;

    let data = { id: idstring };

    return this.http.get<MessageData[]>(uri, { params: data });

  }

  clearMessages(id){

    console.log("I am sweeper")

    const uri = 'http://localhost:3000/api/clearmessages';

    var obj = {
     email:id
    }

    console.log(obj)
    
    this.http.post(uri, obj)
    .subscribe(res => console.log("done"))

  }


  
  


  setLogStatus(value: boolean) {
    this.logstatus = value;
    localStorage.setItem('loggedIn','true')
  }

  get IsLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.logstatus.toString())
  }


  setCurrentId(id) {
    this.currentId = id;
    localStorage.setItem('currId',this.currentId)
  }

  get IsCurrentId() {
    return localStorage.getItem('currId')
  }


  setSellerId(id) {
    console.log("I am setting the seller Id")
    this.sellerId = id;
    localStorage.setItem('sellerId',this.sellerId)
  }

  get IsSellerId() {
    return localStorage.getItem('sellerId')
  }


  setBookId(id) {
    console.log("I am setting the book Id")

    this.bookId = id;
    localStorage.setItem('bookId',this.bookId)
  }

  get IsBookId() {
    return localStorage.getItem('bookId')
  }



  setBookName(name) {
    console.log("I am setting the book name")

    this.bookName = name;
    localStorage.setItem('bookName',this.bookName)
  }

  get IsBookName() {
    return localStorage.getItem('bookName')
  }


  setBookImg(img) {
    console.log("I am setting the book img")

    this.bookImg = img;
    localStorage.setItem('bookImg',this.bookImg)
  }

  get IsBookImg() {
    return localStorage.getItem('bookImg')
  }


  setSellerEmail(seller_email) {
    console.log("I am setting the seller email")

    this.sellerEmail = seller_email;
    localStorage.setItem('seller_email',this.sellerEmail)
  }

  get IsSellerEmail() {
    return localStorage.getItem('seller_email')
  }


  setReplyTo(reply_email) {

    console.log("I am setting the reply email")

    this.replyEmail = reply_email;
    localStorage.setItem('reply_email',this.replyEmail)
  }

  get IsReplyTo() {
    return localStorage.getItem('reply_email')
  }


  


  updateLocalStorage(id){
    localStorage.setItem("currId",id)
  }






  deleteBook(name, price) {
    const uri = 'http://localhost:3000/delete';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
        console.log('Done'));
  }

  addBook(name, author, price) {
    const uri = 'http://localhost:3000/api/add';
    const obj = {
      name: name,
      author: author,
      price: price
    };

    this
      .http
      .post(uri, obj)
      .subscribe(res =>
        console.log('Done'));
  }


}
