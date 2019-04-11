import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/index';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  constructor(private route:ActivatedRoute,private _companiesService:CompaniesService) { }
	company;
	id;

  ngOnInit() {
  	this.id = +this.route.snapshot.paramMap.get('id');  	
  	this._companiesService.getCompanyData(this.id).subscribe(
  		(data)=>{ this.company = data },
  		(err)=> console.log(err),
  		() => console.log("Success fetching company data")
  		);
  }

}
