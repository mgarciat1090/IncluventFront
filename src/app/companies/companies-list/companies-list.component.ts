import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/index';


@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
	companies;

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit() {
  	this.getCompanies();
  }

  getCompanies(){
  	this._companiesService.getData().subscribe(
  		data => {
  			this.companies = data;
  		},
  		err => {
  			console.log(err);
  		},
  		() => { console.log("Done loading companies"); }
  	)	
  }

}
