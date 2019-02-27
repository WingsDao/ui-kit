import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SwitchComponent } from './switch.component';

@Component({
  selector: 'ws-test-wrapper',
  template: `<ws-switch [(ngModel)]="isChecked"></ws-switch>`
})
export class TestWrapperComponent {
  isChecked;
}
describe('SwitchComponent', () => {
  let switchComponent: SwitchComponent;
  let wrapperComponent: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchComponent, TestWrapperComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    wrapperComponent = fixture.debugElement.componentInstance;
    switchComponent = fixture.debugElement.query(By.directive(SwitchComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(switchComponent).toBeTruthy();
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
});
