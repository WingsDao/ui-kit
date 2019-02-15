import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchValue:string = null;
  onClick() {
    this.searchValue = '';
  }

}
