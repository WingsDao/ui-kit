import { Component, Host, Input, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { RadioGroupComponent } from '../radio-group.component';

@Component({
  selector: 'ws-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent<T = any> implements OnInit, OnDestroy {
  @Input() value: T;
  name: string;
  selected: T;

  constructor(@Host() private parent: RadioGroupComponent<T>) {}

  ngOnInit() {
    this.parent.currentName
      .pipe(untilDestroyed(this))
      .subscribe(groupName => this.name = groupName);

    this.parent.currentSelected
      .pipe(untilDestroyed(this))
      .subscribe(selected => {
        this.selected = selected;
      });
  }

  setSelected(val: T) {
    this.parent.selected = val;
  }

  ngOnDestroy() {
    // To protect you, we'll throw an error if it doesn't exist.
  }
}
