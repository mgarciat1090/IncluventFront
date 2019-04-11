import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { IJob,ICompany,IJobApp } from '../common/index';

@Injectable()
export class JobsService{

	private jobs;
	private originalJobs;
	private companies;

	private jobUrl = 'http://localhost:8000/api/jobs/';
	private jobApplyUrl = 'http://localhost:8000/api/job-application';
	private jobsUrl = 'http://localhost:8000/api/jobs';
	private companiesUrl = 'http://localhost:8000/api/companies';
	private companyUrl = 'http://localhost:8000/api/companies/';
	data:any = {};

	constructor(private http:HttpClient){}

	getData():Observable<IJob>{
		return this.http.get<IJob>(this.jobsUrl);
	}

	getJob(id):Observable<IJob>{
		return this.http.get<IJob>(this.jobUrl + id);
	}

	getCompany(id):Observable<ICompany>{
		return this.http.get<ICompany>(this.companyUrl + id);
	}

	getJobsAndCompanies(){
		return forkJoin(
			this.http.get(this.jobsUrl),
			this.http.get(this.companiesUrl)
			)
	}

	saveApplyForm(data){
		console.log(data);
		const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json'
		  })
		};
		return this.http.post<IJobApp>(this.jobApplyUrl,data,httpOptions);
	}

  getCompaniesByJobs(jobs, companies){
    jobs.forEach(function(job){
      for(let i = 0; i < companies.length; i++){
        if(companies[i].id == job.company_id){
          job.company = companies[i];
        }
      }
    });
  }


}