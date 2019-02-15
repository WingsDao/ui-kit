import { Component, Host, Input, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { RadioButtonGroupComponent } from '../radio-button-group.component';

@Component({
  selector: 'ws-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent<T = any> implements OnInit, OnDestroy {
  @Input() value: T;
  name: string;
  selected: T;

  constructor(@Host() private parent: RadioButtonGroupComponent<T>) {}

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

  ngOnDestroy() {
  }

  isChecked() {
    return this.parent.selected === this.value;
  }

  toggle(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.parent.selected = this.value;
    }
  }
}
