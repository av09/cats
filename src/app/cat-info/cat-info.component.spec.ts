import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatInfoComponent } from './cat-info.component';
import {CatService} from '../cat.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {CatRatingPipe} from '../cat-rating.pipe';

describe('CatInfoComponent', () => {
  let component: CatInfoComponent;
  let fixture: ComponentFixture<CatInfoComponent>;
  let catsExpected: Cat[] = [{name: 'Bengal Cats', id: 'beng'}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CatInfoComponent,
        CatRatingPipe,
      ],
      providers: [
        {
          provide: CatService,
          useValue: { getCatInfo: () => of(catsExpected) }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => {
                  return { id: 'beng' };
                },
              }
            },
          }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set property cats according to the response of the CatService getCatInfo method', () => {
    expect(component.cat).toBe(null);
    component.ngOnInit();
    expect(component.cat).toEqual(catsExpected[0]);
    // this needs to be set as empty to test the other branch of the function in the next case
    catsExpected = [];
  });

  it('should set property cats null if the response of the CatService getCatInfo method is empty', () => {
    expect(component.cat).toBe(null);
    component.ngOnInit();
    expect(component.cat).toEqual(null);
  });
});
