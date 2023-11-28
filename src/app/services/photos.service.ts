import { Injectable } from "@angular/core";
import { PhotoModel } from "../models/photo.model";

@Injectable({
    providedIn: 'root'
})
export class PhotosService {

    readonly data: ReadonlyArray<PhotoModel> = [
        {
            id: 1,
            title: 'Pembe Çiçek',
            description: 'asdas',
            url: 'pink-flower-8.jpg'
        },
        {
            id: 2,
            title: 'Mor Çiçek',
            description: 'asdas',
            url: 'purple-flower-3.jpg'
        },
        {
            id: 3,
            title: 'Sarı Çiçek',
            description: 'asdas',
            url: 'yellow-flower-2.jpg'
        }
    ];

    getById(id: number) {
        return this.data.find((p) => p.id === id);
    }

}