import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs/operators';

import { AlertsService, UserService } from '../../services/index'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

	registerForm: FormGroup;
	loading = false;
	submitted = false;

  constructor(
  	private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService,
		private alertService: AlertsService) { }

  ngOnInit() {

  	this.registerForm = this.formBuilder.group({
  		firstName: ['', Validators.required],
  		lastName: ['',Validators.required],
  		username: ['', Validators.required],
  		password: ['',[Validators.required,Validators.minLength(6)]]
  	});
  }

  get f(){
  	return this.registerForm.controls;
  }

  onSubmit(){
  	this.submitted = true;

  	if(this.registerForm.invalid){
  		return true;
  	}
  	this.loading = true;
  	this.userService.register(this.registerForm.value)
  	.pipe(first())
  	.subscribe(
  		data =>{
  			this.alertService.success('Registration succesful',true);
  			this.router.navigate(['iniciar-sesion']);
  		},
  		error => {
  			this.alertService.error(error);
  			this.loading = false;
  		});
  }
}
