import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../../common/abstract-value-accessor';

@Component({
  selector: 'ws-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [MakeProvider(SearchComponent)]
})
export class SearchComponent extends AbstractValueAccessor<string> {
  @Input() placeholder: string;


  setDisabledState(isDisabled: boolean) {
    throw new Error('Method not implemented.');
  }
}
