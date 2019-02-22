import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { SearchExampleComponent } from './search-example.component';
import { DemoComponent } from '../../common/demo/demo.component';

describe('SearchExampleComponent', () => {
  let component: SearchExampleComponent;
  let fixture: ComponentFixture<SearchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExampleComponent, DemoComponent ],
      imports: [UiKitModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
