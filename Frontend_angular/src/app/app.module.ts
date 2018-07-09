import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { MiddleComponent } from './homepage/middle/middle.component';
import { FooterComponent } from './homepage/footer/footer.component';
import {DataService} from './data.service';
import { ItemdescComponent } from './itemdesc/itemdesc.component';
import { Middle2Component } from './middle2/middle2.component';
import { Footer2Component } from './footer2/footer2.component';
import { Header2Component } from './header2/header2.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GetmessageComponent } from './getmessage/getmessage.component';
import { MessageboxComponent } from './messagebox/messagebox.component';








const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate :[AuthGuard]
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'itemdesc/:id',
    component: ItemdescComponent
  },
  {
    path: 'getmessage',
    component: GetmessageComponent
  },
  {
    path: 'messages',
    component: MessageboxComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CartComponent,
    LoginComponent,
    HomepageComponent,
    SignInComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    ItemdescComponent,
    Middle2Component,
    Footer2Component,
    Header2Component,
    SignUpComponent,
    GetmessageComponent,
    MessageboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [DataService,AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
