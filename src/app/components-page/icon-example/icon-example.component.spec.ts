import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { IconExampleComponent } from './icon-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('IconExampleComponent', () => {
  let component: IconExampleComponent;
  let fixture: ComponentFixture<IconExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconExampleComponent ],
      imports: [UiKitModule, DemoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
