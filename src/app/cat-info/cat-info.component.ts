import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.component.html',
  styleUrls: ['./cat-info.component.scss']
})
export class CatInfoComponent implements OnInit {
  cat: Cat | null;
  breedId: string | null;

  constructor(
    private route: ActivatedRoute,
    private catService: CatService,
  ) {
    this.cat = null;
    this.breedId = null;
  }

  ngOnInit(): void {
    this.breedId = this.route.snapshot.paramMap.get('breedId');

    this.catService.getCatInfo(this.breedId).subscribe((cats: Cat[]) => {
      this.cat = cats.length ? cats[0] : null;
    });
  }
}
