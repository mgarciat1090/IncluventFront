import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertsService } from '../../services/index';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit , OnDestroy {
	private subscription:Subscription;
	message: any;

  constructor(private _alertsService:AlertsService) { }

  ngOnInit() {
  	this.subscription = this._alertsService.getMessage().subscribe(message => {
  		this.message = message;
  	});
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

}
