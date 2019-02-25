import { Component, OnInit, Input, QueryList, ContentChildren, ViewContainerRef, ElementRef, AfterViewInit } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'ws-modal-router',
  templateUrl: './modal-router.component.html',
  styleUrls: ['./modal-router.component.scss']
})
export class ModalRouterComponent implements AfterViewInit {
  private _selected: string;
  get selected(): string {
    return this._selected;
  }
  @Input()
  set selected(value: string) {
    this._selected = value;
    this.navigate(this._selected);
    console.log(this._selected);
  }

  @Input() visible: boolean;

  @ContentChildren(ModalComponent) private modals: QueryList<ModalComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => this.initialize());
  }

  private initialize() {
    this.navigate(this._selected);
  }

  public open() {
    this.visible = true;

    if (!this.modals) {
      return;
    }
    const activeModal = this.modals.find(modal => modal.name === this.selected) || this.modals.first;
    this.hideAll();
    activeModal.hidden = false;
  }

  public close() {
    this.visible = false;

    if (!this.modals) {
      return;
    }
    this.hideAll();
  }

  public navigate(name: string) {
    if (!this.modals) {
      return;
    }
    const activeModal = this.modals.find(modal => modal.name === name);
    if (!activeModal) {
      throw new Error(`Modal with name=${name} not found.`);
    }

    this.hideAll();
    activeModal.hidden = false;
  }

  private hideAll() {
    this.modals.forEach(modal => modal.hidden = true);
  }
}
