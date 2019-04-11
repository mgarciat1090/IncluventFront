import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobsService';
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-company-jobs',
	templateUrl: './company-jobs.component.html',
	styleUrls: ['./company-jobs.component.scss']
})
export class CompanyJobsComponent implements OnInit {
	PAGE_SIZE = 5;

	jobs;
	companies;
	originalJobs;
	visibleJobs;
	totalPages;
	numberOfPagesArray = [];
	companyId;

	constructor(private _jobsService:JobsService,
		private activatedRoute: ActivatedRoute) {
			this.companyId = this.activatedRoute.snapshot.paramMap.get('id');
		}

	ngOnInit() {

		this._jobsService.getJobsAndCompanies().subscribe(
			data => {
				this.jobs = data[0];
				this.companies = data[1];
				this._jobsService.getCompaniesByJobs(this.jobs,this.companies);
				this.jobs = this.jobs.filter((el)=>{
					return parseInt(el.company_id) === parseInt(this.companyId);
				});
				this.originalJobs = JSON.parse(JSON.stringify(data[0]));
				this.visibleJobs = JSON.parse(JSON.stringify(this.jobs));
			}
		)
	}

}