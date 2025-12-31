import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildLifecycleComponent } from './child-lifecycle.component';
import { By } from '@angular/platform-browser';

describe('ChildLifecycleComponent', () => {
  let component: ChildLifecycleComponent;
  let fixture: ComponentFixture<ChildLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ declarations: [ChildLifecycleComponent] }).compileComponents();
    fixture = TestBed.createComponent(ChildLifecycleComponent);
    component = fixture.componentInstance;
  });

  it('shows input data and emits remove', () => {
    component.item = { id: 42, title: 'T', body: 'B' };
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('h4').textContent;
    expect(title).toContain('T');

    spyOn(component.remove, 'emit');
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(component.remove.emit).toHaveBeenCalledWith(42);
  });
});
