import {Component, inject} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NewsService} from './news.service';

@Component({
  selector: 'app-news',
  imports: [
    DatePipe
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export default class NewsComponent {
  readonly newsResource = inject(NewsService).newsResource;
}
