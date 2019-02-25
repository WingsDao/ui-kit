import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitModule } from 'ui-kit';
import { ButtonExampleComponent } from './button-example.component';
import { AppCommonModule } from '../../common/common.module';
import { DemoModule } from '../../common/demo/demo.module';

describe('ButtonExampleComponent', () => {
  let component: ButtonExampleComponent;
  let fixture: ComponentFixture<ButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExampleComponent ],
      imports: [UiKitModule, AppCommonModule, DemoModule]
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
