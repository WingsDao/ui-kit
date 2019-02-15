import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RadioButtonGroupComponent } from './radio-button-group.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@Component({
  selector: 'ws-test-wrapper',
  template: `
  <ws-radio-button-group [(selected)]="selected" name="my-option">
    <ws-radio-button value="1">option {{value}}</ws-radio-button>
    <ws-radio-button value="2">option 2</ws-radio-button>
    <ws-radio-button value="3">option 3</ws-radio-button>
  </ws-radio-button-group>
  `
})

export class TestWrapperComponent {
  selected = '3';
}

describe('RadioButtonGroupComponent', () => {
  let radioButtonGroupComponent: RadioButtonGroupComponent;
  let testWrapper: TestWrapperComponent;
  let radioInputs: DebugElement[];
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonGroupComponent, TestWrapperComponent, RadioButtonComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    testWrapper = fixture.nativeElement;
    radioButtonGroupComponent = fixture.debugElement.query(By.directive(RadioButtonGroupComponent)).nativeElement;
    radioInputs = fixture.debugElement.queryAll(By.css('input[type="checkbox"]'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(radioButtonGroupComponent).toBeTruthy();
    expect(radioInputs.length).toBe(3);
  });

  it('should set selected from @Input', () => {
    testWrapper.selected = '2';
    const input = fixture.debugElement.query(By.css('input[type="checkbox"]:nth-child(1)')).nativeElement;
    input.click();
    fixture.detectChanges();
    expect(testWrapper.selected).toBe('2');
  });
});
