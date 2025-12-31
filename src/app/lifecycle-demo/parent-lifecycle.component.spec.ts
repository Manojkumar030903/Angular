import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentLifecycleComponent } from './parent-lifecycle.component';
import { ChildLifecycleComponent } from './child-lifecycle.component';
import { DataService } from './data.service';

describe('ParentLifecycleComponent', () => {
  let comp: ParentLifecycleComponent;
  let fixture: ComponentFixture<ParentLifecycleComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentLifecycleComponent, ChildLifecycleComponent],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentLifecycleComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('loads items from service', () => {
    expect(comp.items.length).toBeGreaterThan(0);
  });

  it('remove from parent removes item and updates service', () => {
    const id = comp.items[0].id;
    comp.remove(id);
    expect(comp.items.find(i => i.id === id)).toBeUndefined();

    service.getItems().subscribe(list => {
      expect(list.find(i => i.id === id)).toBeUndefined();
    });
  });
});
