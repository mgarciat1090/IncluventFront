import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/index'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedIn(){
  	return this.authenticationService.currentUserValue;
  }

  logout(){
    this.authenticationService.logout();
  }

}
