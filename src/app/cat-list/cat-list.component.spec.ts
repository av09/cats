import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CatListComponent } from './cat-list.component';
import {CatService} from '../cat.service';
import {of} from 'rxjs';

describe('CatListComponent', () => {
  let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;
  const catsExpected: Cat[] = [{name: 'Bengal Cats', id: 'beng'}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CatListComponent ],
      providers: [
        {
          provide: CatService,
          useValue: { getCatBreeds: () => of(catsExpected) }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set property cats according to the response of the CatService getCatBreeds method', () => {
    expect(component.cats).toEqual([]);
    component.ngOnInit();
    expect(component.cats).toEqual(catsExpected);
  });
});
