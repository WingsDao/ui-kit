import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RadioGroupComponent } from './radio-group.component';
import { RadioComponent } from './radio/radio.component';

@Component({
  selector: 'ws-test-wrapper',
  template: `
  <ws-radio-group [(ngModel)]='selected' name='my-option'>
    <ws-radio value='1'>option 1</ws-radio>
    <ws-radio value='2'>option 2</ws-radio>
    <ws-radio value='3'>option 3</ws-radio>
  </ws-radio-group>
  `
})
export class TestWrapperComponent {
  selected = '3';
}

describe('RadioGroupComponent', () => {
  let radioGroupComponent: RadioGroupComponent;
  let testWrapper: TestWrapperComponent;
  let radioInputs: DebugElement[];
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroupComponent, TestWrapperComponent, RadioComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    testWrapper = fixture.nativeElement;
    radioGroupComponent = fixture.debugElement.query(By.directive(RadioGroupComponent)).nativeElement;
    radioInputs = fixture.debugElement.queryAll(By.css('input[type="radio"]'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(radioGroupComponent).toBeTruthy();
    expect(radioInputs.length).toBe(3);
  });

  it('should set selected from @Input', () => {
    testWrapper.selected = '2';
    const input = fixture.debugElement.query(By.css('input[type="radio"]:nth-child(1)')).nativeElement;
    input.click();
    fixture.detectChanges();
    expect(testWrapper.selected).toBe('2');
  });
});
