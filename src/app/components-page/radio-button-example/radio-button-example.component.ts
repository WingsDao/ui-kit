import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-radio-button-example',
  templateUrl: './radio-button-example.component.html',
  styleUrls: ['./radio-button-example.component.scss']
})
export class RadioButtonExampleComponent implements OnInit {

  selected: any = '2';
  constructor() { }

  ngOnInit() {
  }

}
