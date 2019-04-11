import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { IUser } from './common/index';
import {UserService, AuthenticationService } from './services/index'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'TraMarketFront';

  currentUser: IUser;
  currentUserSubscription: Subscription;
  users: IUser[] = [];

  constructor(
  	private authenticationService: AuthenticationService,
  	private userService: UserService
  ){
  	this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user =>{
  		this.currentUser = user;
  	});
  }

  ngOnInit(){
  	this.loadAllUsers();
  }

  ngOnDestroy(){
  	this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id:number){
  	this.userService.delete(id).pipe(first()).subscribe(()=>{
  		this.loadAllUsers();
  	});
  }

  private loadAllUsers(){
  	this.userService.getAll().pipe()
  }

}
