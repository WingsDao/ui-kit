import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-radio-example',
  templateUrl: './radio-example.component.html',
  styleUrls: ['./radio-example.component.scss']
})
export class RadioExampleComponent implements OnInit {

  selected: any = '2';
  constructor() { }

  ngOnInit() {
  }

}
