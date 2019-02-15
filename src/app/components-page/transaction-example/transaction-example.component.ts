import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-transaction-example',
  templateUrl: './transaction-example.component.html',
  styleUrls: ['./transaction-example.component.scss']
})
export class TransactionExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('clicked');
  }
}
