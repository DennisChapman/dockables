import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockablesComponent } from './dockables.component';

describe('DockablesComponent', () => {
  let component: DockablesComponent;
  let fixture: ComponentFixture<DockablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
