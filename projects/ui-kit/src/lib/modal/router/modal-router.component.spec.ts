import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRouterComponent } from './modal-router.component';

describe('ModalRouterComponent', () => {
  let component: ModalRouterComponent;
  let fixture: ComponentFixture<ModalRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
