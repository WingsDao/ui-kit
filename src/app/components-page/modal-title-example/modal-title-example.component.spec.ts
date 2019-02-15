import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTitleExampleComponent } from './modal-title-example.component';

describe('ModalTitleExampleComponent', () => {
  let component: ModalTitleExampleComponent;
  let fixture: ComponentFixture<ModalTitleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTitleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTitleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
