import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

	searchTerm;
	@Output() search:EventEmitter<string> = new EventEmitter<string>();
	@Output() filterByPreparation:EventEmitter<string> = new EventEmitter<string>();
  @Output() filterByDuration:EventEmitter<string> = new EventEmitter<string>();
	@Output() clearFilters:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchAction(){
  	this.search.emit(this.searchTerm);
  }

  filterByPreparationAction(term){
  	this.filterByPreparation.emit(term);
  }

  filterByDurationAction(term){
    this.filterByDuration.emit(term);
  }
  clearFiltersAction(term){
    console.log(term);
  	this.clearFilters.emit(term);
  }

}
