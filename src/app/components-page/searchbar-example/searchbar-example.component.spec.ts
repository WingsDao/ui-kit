import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarExampleComponent } from './searchbar-example.component';

describe('SearchbarExampleComponent', () => {
  let component: SearchbarExampleComponent;
  let fixture: ComponentFixture<SearchbarExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
