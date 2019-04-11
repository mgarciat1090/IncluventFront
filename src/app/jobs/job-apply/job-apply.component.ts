import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JobsService } from '../../services/index';
import { IJob,ICompany } from '../../common/index';





@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
	id: number;
	job: IJob;
	company: ICompany;
	isFillingForm:boolean = false;
	


 constructor(private route:ActivatedRoute, 
 	private _jobsService:JobsService) { }

  fillForm(){
  	//this.fillingForm.reset();
  	this.isFillingForm = !this.isFillingForm;
  }

  getJob(id:number){
    this._jobsService.getJob(id).subscribe(
    	data => { 
    		this.job = data;
    		this.getJobCompany(this.job.company_id);
    	},
    	err => console.log(err)
    	)
  }

  getJobCompany(id:number){
  	this._jobsService.getCompany(id).subscribe(
  		data => { this.company = data}
  		)
  }

  ngOnInit() {
  	this.id = +this.route.snapshot.paramMap.get('id');

  	this.getJob(this.id);

  }

}
