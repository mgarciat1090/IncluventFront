import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.scss']
})
export class CompanyRegisterComponent implements OnInit {

	fillingForm = this.fb.group({
		companyName:['',Validators.required]
	})

  constructor(
  	private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
