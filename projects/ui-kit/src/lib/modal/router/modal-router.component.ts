import { Component, OnInit, Input, QueryList, ContentChildren, ViewContainerRef, ElementRef } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'ws-modal-router',
  templateUrl: './modal-router.component.html',
  styleUrls: ['./modal-router.component.scss']
})
export class ModalRouterComponent implements OnInit {
  @Input() visible: boolean;
  @Input() active: string;

  @ContentChildren(ModalComponent) private modals: QueryList<ModalComponent>;

  constructor() { }

  ngOnInit() {
  }

  public open() {
    this.visible = true;

    if (!this.modals) {
      return;
    }
    const activeModal = this.getModal(this.active) || this.modals.first;
    this.hideAllModals();
    activeModal.hidden = false;
  }

  public close() {
    this.visible = false;

    if (!this.modals) {
      return;
    }
    this.hideAllModals();
  }

  public navigate(name: string) {
    if (!this.modals) {
      return;
    }
    const activeModal = this.getModal(name);
    if (!activeModal) {
      throw new Error(`Modal with name=${name} not found.`);
    }
    this.hideAllModals();
    activeModal.hidden = false;
  }

  private getModal(name: string) {
    return this.modals.find(modal => modal.name === name);
  }

  private hideAllModals() {
    this.modals.forEach(modal => modal.hidden = true);
  }
}
