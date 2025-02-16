import { Component, inject } from '@angular/core';
import { ComicUserService } from '../../service/comic-user.service';
import { ListComic } from '../../model/comic.model';
import { ListComicComponent } from '../list-comic/list-comic.component';

@Component({
  selector: 'app-comic-user',
  imports: [ListComicComponent],
  templateUrl: './comic-user.component.html',
  styleUrl: './comic-user.component.scss'
})
export class ComicUserComponent {

    private comicUserService = inject(ComicUserService);

    listComic: ListComic[] = [];
    loadingSkeleton: boolean = true;

    async ngOnInit() {
        this.comicUserService.getFavoriteComics().subscribe((response) => {
            this.listComic = response.data;
            this.loadingSkeleton = false;
        });
    }
}
