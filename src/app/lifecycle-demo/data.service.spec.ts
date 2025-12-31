import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DataService] });
    service = TestBed.inject(DataService);
  });

  it('should return items', (done) => {
    service.getItems().subscribe(items => {
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].id).toBeDefined();
      done();
    });
  });

  it('should remove item', (done) => {
    service.getItems().subscribe(items => {
      const idToRemove = items[0].id;
      service.remove(idToRemove);
      service.getItems().subscribe(next => {
        expect(next.find(i => i.id === idToRemove)).toBeUndefined();
        done();
      });
    });
  });
});
