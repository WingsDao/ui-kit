import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ws-global-styles',
  templateUrl: './global-styles.component.html',
  styleUrls: ['../../styles/typography.scss', '../../styles/colors.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
