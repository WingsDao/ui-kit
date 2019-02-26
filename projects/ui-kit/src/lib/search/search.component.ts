import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'ws-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private _value: string;

  @Output() valueChange = new EventEmitter<string>();

  @Input() placeholder: string;

  @Input()
  get value() {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.valueChange.emit(val);
  }

  ngOnInit() {}
}
