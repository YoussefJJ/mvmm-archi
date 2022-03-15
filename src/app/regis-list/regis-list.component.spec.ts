import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisListComponent } from './regis-list.component';

describe('RegisListComponent', () => {
  let component: RegisListComponent;
  let fixture: ComponentFixture<RegisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
