import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCrudComponent } from './full-crud.component';

describe('FullCrudComponent', () => {
  let component: FullCrudComponent;
  let fixture: ComponentFixture<FullCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
