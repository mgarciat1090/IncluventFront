import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/index';

@Component({
	selector: 'app-jobs-container',
	templateUrl: './jobs-container.component.html',
	styleUrls: ['./jobs-container.component.scss']
})
export class JobsContainerComponent implements OnInit {
	PAGE_SIZE = 5;

	jobs:any;
	originalJobs;
	visibleJobs;
	companies;
	selectedDisability = 0;
	searchTerm;
	totalPages = 0;
	numberOfPagesArray = [];
	currentIndex = 1;

	constructor(private _jobsService: JobsService) { }

	clearFilters(){
		this.resetJobs();
	}


	resetJobs(){
		this.selectedDisability = 0;
		this.jobs = JSON.parse(JSON.stringify(this.originalJobs)); 
		this.visibleJobs = this.jobs.slice(0,5);
		this.changePage(1);
		this.getTotalPages();
	}

	search(term){
		let BreakException = {};
		let matchedJobs = [];
		this.resetJobs();
		this.jobs.forEach((job) => {
			try{
				Object.keys(job).forEach(function(key){
					let hasMatch = job[key] && job[key].toString().toLowerCase().includes(term.toLowerCase());
					if(hasMatch){
						matchedJobs.push(job);
						throw BreakException;
					}
				},this);
			}catch(e){
				if(e !== BreakException) throw e;
			}
		},this);
		this.jobs = matchedJobs;
		this.getTotalPages(false);
	}

	filterByDisability(disabilityId){
		this.resetJobs();
		this.selectedDisability = disabilityId;
		this.jobs = this.jobs.filter((el)=>{
			return el.disability === disabilityId;
		});
		this.getTotalPages(false);
		this.visibleJobs = this.jobs.slice(0,5);
		this.changePage(1);
	}

	filterByPreparation(preparation){
		this.resetJobs();
		this.jobs = this.jobs.filter((el)=>{
			return el.preparation.toLowerCase() === preparation.toLowerCase();
		});
		this.getTotalPages(false);
		this.visibleJobs = this.jobs.slice(0,5);
		this.changePage(1);
	}

	filterByDuration(duration){
		this.resetJobs();
		this.jobs = this.jobs.filter((el)=>{
			return el.duration === duration;
		});
		this.getTotalPages(false);
		this.visibleJobs = this.jobs.slice(0,5);
		this.changePage(1);
	}

	changePage(index){
		this.currentIndex = index;
		this.visibleJobs = this.jobs.slice((index-1)*this.PAGE_SIZE,index*this.PAGE_SIZE)
	}

	getTotalPages(isOriginal:boolean = true){
		let pages = isOriginal ? this.originalJobs.length/this.PAGE_SIZE : this.jobs.length/this.PAGE_SIZE;
		this.totalPages = pages%this.PAGE_SIZE === 0 ? pages : Math.ceil(pages);
		//this.numberOfPagesArray = Array(this.totalPages).fill(0).map((x,i) => i );
		this.numberOfPagesArray = Array.from({ length: this.totalPages},(v,k)=>k+1);
	}

	ngOnInit() {
		this._jobsService.getJobsAndCompanies().subscribe(
			data => {
				this.jobs = data[0];
				this.companies = data[1];
				this._jobsService.getCompaniesByJobs(this.jobs,this.companies);
				this.originalJobs = JSON.parse(JSON.stringify(data[0]));
				this.visibleJobs = this.jobs.slice(0,5);
				this.getTotalPages();
			}
		)
	}

}
