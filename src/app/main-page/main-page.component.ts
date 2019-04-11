import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IJob,ICompany } from '../common/index';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
