import {Injectable} from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { ICompany } from '../common/index';

@Injectable()
export class CompaniesService {
	private companiesUrl = 'http://localhost:8000/api/companies';

	data:any = {};

	constructor(private http:HttpClient){}

	getData():Observable<ICompany>{
		return this.http.get<ICompany>(this.companiesUrl);
	}

	getCompanyData(id):Observable<ICompany>{
		return this.http.get<ICompany>(this.companiesUrl + '/' + id);
	}



}
