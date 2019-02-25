import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string = null;

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.searchValue = '';
  }
}
