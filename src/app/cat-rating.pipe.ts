import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catRating'
})
export class CatRatingPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (!value) {
      return 'N/A';
    }

    let ratingElement = '';
    for (let i = 0; i < value; i++) {
      ratingElement += '<i class="fas fa-cat"></i> ';
    }
    return ratingElement;
  }

}
