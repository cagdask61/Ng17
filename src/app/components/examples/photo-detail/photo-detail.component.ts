import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PhotosService } from '../../../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.scss',
  imports: [
    JsonPipe
  ],
})
export default class PhotoDetailComponent {

  private readonly photosService = inject(PhotosService);

  readonly photo = toSignal(inject(ActivatedRoute).paramMap.pipe(
    map(value => {
      return this.photosService.getById(Number(value.get('id')));
    }),
  ));



}