import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  @Input() code: string;
  @Input() title = 'HTML';
}
