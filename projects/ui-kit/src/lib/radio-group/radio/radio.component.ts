import { Component, Host, Input, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { RadioGroupComponent } from '../radio-group.component';

@Component({
  selector: 'ws-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent<T = any> implements OnDestroy {
  @Input() value: T;

  constructor(@Host() public parent: RadioGroupComponent<T>) {}

  ngOnDestroy() {
    // To protect you, we'll throw an error if it doesn't exist.
  }
}
