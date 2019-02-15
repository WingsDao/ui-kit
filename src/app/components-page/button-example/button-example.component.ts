import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss']
})
export class ButtonExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(event: any) {
    alert(event);
  }

}
