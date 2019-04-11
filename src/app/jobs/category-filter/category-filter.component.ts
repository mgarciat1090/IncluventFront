import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

	@Output() filter:EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedDisability:number;

  constructor() { }

  ngOnInit() {
  }

  filterByDisability(disabilityId){
    this.selectedDisability = disabilityId;
    this.filter.emit(disabilityId);
  }

}
