import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { TableExampleComponent } from './table-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('TableExampleComponent', () => {
  let component: TableExampleComponent;
  let fixture: ComponentFixture<TableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExampleComponent ],
      imports: [UiKitModule, DemoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
