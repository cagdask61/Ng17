import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PhotosService } from '../../../services/photos.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
  imports: [
    RouterLink
  ],
})
export default class PhotosComponent {
  readonly photosService = inject(PhotosService);
}
