import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child } from './child';

describe('Child', () => {
  let component: Child;
  let fixture: ComponentFixture<Child>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders posts and calls remove callback', () => {
    component.posts = [{ id: 1, title: 'T1' }];
    component.onRemove = jasmine.createSpy('onRemove');
    fixture.detectChanges();

    const li = fixture.nativeElement.querySelectorAll('li')[0];
    expect(li.textContent).toContain('T1');

    const btn = fixture.nativeElement.querySelector('button');
    btn.click();
    expect((component.onRemove as jasmine.Spy).calls.any()).toBeTrue();
  });
});
