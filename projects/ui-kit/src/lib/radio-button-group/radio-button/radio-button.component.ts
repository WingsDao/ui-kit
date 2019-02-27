import { Component, Host, Input, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { RadioButtonGroupComponent } from '../radio-button-group.component';

@Component({
  selector: 'ws-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent<T = any> implements OnDestroy {
  @Input() value: T;

  constructor(@Host() public parent: RadioButtonGroupComponent<T>) {}

  ngOnDestroy() {
  }
}
