import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  isCheckedOne = false;
  isCheckedTwo = false;
  isFilterChecked = false;

  constructor() { }

  ngOnInit() {
  }

  onCheck() {

    if (!this.isFilterChecked) {
      this.isFilterChecked = false;
      this.isCheckedOne = false;
      this.isCheckedTwo = false;
    } else {
      this.isFilterChecked = true;
      this.isCheckedOne = true;
      this.isCheckedTwo = true;
    }
  }
}

