import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ws-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() href: string;
  constructor() { }

  ngOnInit() {
  }

}
