import {Injectable} from '@angular/core';
import {httpResource} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NewsService {

  readonly newsResource = httpResource<any[]>(() => 'https://67f28b29ec56ec1a36d36920.mockapi.io/news', {
    defaultValue: [],
  });

}
