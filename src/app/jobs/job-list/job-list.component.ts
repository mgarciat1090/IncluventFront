import { Component, OnInit, Input } from '@angular/core';
import { IJob,IDisability } from '../../common/index'

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

	@Input() jobs:IJob[];
	disabilities:IDisability[];


  constructor() { }

  ngOnInit() {
    this.disabilities = [
      {
        id:1,
        fontawesome:'fa-blind'
      },
      {
        id:2,
        fontawesome:'fa-wheelchair'
      },
      {
        id:3,
        fontawesome:'fa-deaf'
      },
      {
        id:4,
        fontawesome:'fa-hand-holding-heart'
      }
    ]
  }

  getDisabilityClass(disabilityId){
    let dis =  this.disabilities.filter((disability)=>{
      return disability.id == disabilityId;
    });
    return dis[0].fontawesome;
  }

}
