import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';

import { ModalComponent } from './modal.component';
import { IconComponent } from '../icon/icon.component';
import { ModalHeaderComponent } from './header/modal-header.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent, IconComponent, ModalHeaderComponent ],
      imports: [InlineSVGModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
