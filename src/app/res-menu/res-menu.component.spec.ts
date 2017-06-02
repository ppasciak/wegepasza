import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResMenuComponent } from './res-menu.component';

describe('ResMenuComponent', () => {
  let component: ResMenuComponent;
  let fixture: ComponentFixture<ResMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
