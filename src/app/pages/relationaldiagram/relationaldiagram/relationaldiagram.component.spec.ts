import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationaldiagramComponent } from './relationaldiagram.component';

describe('RelationaldiagramComponent', () => {
  let component: RelationaldiagramComponent;
  let fixture: ComponentFixture<RelationaldiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationaldiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationaldiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
