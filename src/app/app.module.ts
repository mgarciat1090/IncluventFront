import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // replaces previous Http service
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';

import { IDisability,IJob } from './common/index';
import { JobsService } from './services/index';
import { CompaniesService } from './services/index';

import { JobsComponent } from './jobs/jobs/jobs.component';
import { JobApplyComponent } from './jobs/job-apply/job-apply.component';
import { DialogSuccess } from './jobs/job-apply/dialog-success.component';

import { CompaniesListComponent } from './companies/companies-list/companies-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ResumeFormComponent } from './jobs/resume-form/resume-form.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyJobsComponent } from './companies/company-jobs/company-jobs.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { AlertComponent } from './components/alert/alert.component';

import { AuthGuard } from './guards';
import { JwtInterceptor, ErrorInterceptor } from './helpers/index';
import { AlertsService, AuthenticationService, UserService } from './services/index';
import { CategoryFilterComponent } from './jobs/category-filter/category-filter.component';
import { ListFiltersComponent } from './jobs/list-filters/list-filters.component';
import { JobsContainerComponent } from './jobs/jobs-container/jobs-container.component';
import { CompanyRegisterComponent } from './companies/company-register/company-register.component';

@NgModule({
  exports:[

  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainPageComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    JobsComponent,
    JobApplyComponent,
    DialogSuccess,
    CompaniesListComponent,
    ResumeFormComponent,
    CompanyComponent,
    CompanyJobsComponent,
    JobListComponent,
    AlertComponent,
    CategoryFilterComponent,
    ListFiltersComponent,
    JobsContainerComponent,
    CompanyRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    JobsService,
    CompaniesService,
    AuthGuard,
    AlertsService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogSuccess
  ]
})
export class AppModule { }
