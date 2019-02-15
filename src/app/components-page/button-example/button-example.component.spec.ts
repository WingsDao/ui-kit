import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitModule } from 'ui-kit';
import { ButtonExampleComponent } from './button-example.component';
import { DemoComponent } from '../../common/demo/demo.component';

describe('ButtonExampleComponent', () => {
  let component: ButtonExampleComponent;
  let fixture: ComponentFixture<ButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExampleComponent, DemoComponent ],
      imports: [UiKitModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
