import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {
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
