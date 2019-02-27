import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.scss']
})
export class SearchExampleComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit() {
  }

}
