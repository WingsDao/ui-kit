import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-page',
  template: `
    <ws-sidebar></ws-sidebar>
    <div class="page page-block">
      <div class="navigation-back mobile">Back</div>
      <div class="page__content">
        <h1 *ngIf="title" class="page__title page-block__title ws-h1">{{title}}</h1>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() title?: string;
  constructor() {}

  ngOnInit() {}
}
