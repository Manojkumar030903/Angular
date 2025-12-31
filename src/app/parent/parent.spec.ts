import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent } from './parent';

describe('Parent', () => {
  let component: Parent;
  let fixture: ComponentFixture<Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log lifecycle events', () => {
    // ngOnInit should have run and logged
    expect(component.logs.find(l => l.startsWith('Parent: ngOnInit'))).toBeDefined();
    expect(component.logs.find(l => l.startsWith('Parent: items loaded'))).toBeDefined();
  });
});
