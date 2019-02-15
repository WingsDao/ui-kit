import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { DemoComponent } from '../../common/demo/demo.component';
import { IconExampleComponent } from './icon-example.component';

describe('IconExampleComponent', () => {
  let component: IconExampleComponent;
  let fixture: ComponentFixture<IconExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconExampleComponent, DemoComponent ],
      imports: [UiKitModule]
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
