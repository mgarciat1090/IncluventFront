import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin.component';

import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyJobsComponent } from './companies/company-jobs/company-jobs.component';
import { CompanyRegisterComponent } from './companies/company-register/company-register.component';

import { JobsComponent } from './jobs/jobs/jobs.component';
import { JobApplyComponent } from './jobs/job-apply/job-apply.component';

const appRoutes: Routes = [

	{ path: '', redirectTo: '/home', pathMatch:'full'},
	{ path: 'home', component:MainPageComponent},
	{ path: 'empleos', component:JobsComponent},
	{ path: 'aplicar/:id', component:JobApplyComponent},
	{ path: 'empresas', component:CompaniesListComponent},
	{ path: 'registrar-empresa', component:CompanyRegisterComponent},
	{ path: 'empresa/:id', component:CompanyComponent},
	{ path: 'empresa/:id/empleos', component:CompanyJobsComponent},
	{ path: 'registrar', component:SignupComponent},
	{ path: 'iniciar-sesion', component:SigninComponent}
		
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
