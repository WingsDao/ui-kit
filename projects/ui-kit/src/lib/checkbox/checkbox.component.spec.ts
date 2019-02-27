import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';
import { CheckboxComponent } from './checkbox.component';

@Component({
  selector: 'ws-test-wrapper',
  template: `<ws-checkbox [(ngModel)]="isChecked"></ws-checkbox>`
})
export class TestWrapperComponent {
  isChecked;
}
describe('CheckboxComponent', () => {
  let checkboxComponent: CheckboxComponent;
  let wrapperComponent: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent, TestWrapperComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    wrapperComponent = fixture.debugElement.componentInstance;
    checkboxComponent = fixture.debugElement.query(By.directive(CheckboxComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(checkboxComponent).toBeTruthy();
    expect(wrapperComponent.isChecked).toBeFalsy();
  });

  it('should check/uncheck on input click', () => {
    const input = fixture.debugElement.query(By.css('input[type="checkbox"]')).nativeElement;
    // click one check
    input.click();
    fixture.detectChanges();
    expect(wrapperComponent.isChecked).toBeTruthy();

    // click two uncheck
    input.click();
    fixture.detectChanges();
    expect(wrapperComponent.isChecked).toBeFalsy();
  });

  it('should check/uncheck on label click', () => {
    const label = fixture.debugElement.query(By.css('label')).nativeElement;
    // click one check
    label.click();
    fixture.detectChanges();
    expect(wrapperComponent.isChecked).toBeTruthy();

    // click two uncheck

    label.click();
    fixture.detectChanges();
    expect(wrapperComponent.isChecked).toBeFalsy();
  });
});
