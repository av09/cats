import { TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import { CatService } from './cat.service';
import {of} from 'rxjs';

describe('CatsService', () => {
  let service: CatService;
  const catsExpected: Cat[] = [{name: 'Bengal Cats', id: 'beng'}];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatService,
        {
          provide: HttpClient,
          useValue: {
            get: jest.fn(() => {
              return of(catsExpected);
            }),
          },
        }
      ]
    });
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('has a method getCatBreeds which returns cat list', () => {
    service.getCatBreeds(10).subscribe((cats: Cat[]) => {
      expect(cats).toEqual(catsExpected);
    });
  });

  it('has a method getCatInfo which returns a cat info', () => {
    service.getCatInfo('beng').subscribe((cats: Cat[]) => {
      expect(cats).toEqual(catsExpected);
    });
  });
});
