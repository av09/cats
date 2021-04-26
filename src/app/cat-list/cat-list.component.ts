import {Component, OnInit} from '@angular/core';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats: Cat[];

  constructor(
    private catService: CatService,
  ) {
    this.cats = [];
  }

  ngOnInit(): void {
    this.catService.getCatBreeds().subscribe((cats: Cat[]) => {
      this.cats = cats;
    });
  }
}
