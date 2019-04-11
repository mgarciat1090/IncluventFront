import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder, FormArray } from '@angular/forms';
import { DialogSuccess } from '../job-apply/dialog-success.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { JobsService } from '../../services/index';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
	name = new FormControl('');

	fillingForm = this.fb.group({
		name: ['',Validators.required],
		lastName: [''],
		age:[''],
		sex:['sexo'],
		address: this.fb.group({
			street:[''],
			city:[''],
			state:[''],
			zip: ['']
		}),
		contactData: this.fb.group({
			tel:[''],
			email:['']
		}),
		aliases: this.fb.array([
			this.fb.control('')
		])
	});

  constructor(
  	private fb: FormBuilder,
  	public dialog: MatDialog,
  	private _jobsService:JobsService) { }

  ngOnInit() {
  }


  onSubmit(){
  	this._jobsService.saveApplyForm(this.fillingForm.value).subscribe(
  		data => {
  			console.log(data);
  			this.openDialog();
  			this.fillingForm.reset();
  		},
  		err => console.log(err));
  }


 	openDialog(): void {
    const dialogRef = this.dialog.open(DialogSuccess, {
      width: '250px',
      data: {name: this.fillingForm.value.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
