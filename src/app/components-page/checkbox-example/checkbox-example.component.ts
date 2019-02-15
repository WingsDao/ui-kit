import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.scss']
})
export class CheckboxExampleComponent implements OnInit {
  isChecked = true;

  constructor() { }

  ngOnInit() {
  }
}
