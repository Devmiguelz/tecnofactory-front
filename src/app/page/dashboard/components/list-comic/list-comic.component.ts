import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicService } from '../../service/comic-all.service';
import { ListComic } from '../../model/comic.model';
import { ComicUserService } from '../../service/comic-user.service';
import { ComicComponent } from './components/comic/comic.component';
import { DetailComicComponent } from './components/detail-comic/detail-comic.component';

@Component({
  selector: 'app-list-comic',
  imports: [CommonModule, ComicComponent, DetailComicComponent],
  templateUrl: './list-comic.component.html',
  styleUrl: './list-comic.component.scss'
})
export class ListComicComponent {
    @Input() comics: ListComic[] = [];
    @Input() loading: boolean = true;

    @ViewChild('detailComponent') detailComponent!: DetailComicComponent;

    private comicService = inject(ComicService);
    private comicUserService = inject(ComicUserService);

    selectedComic: ListComic | null = null;
    skeletonArray = Array(15).fill(0); 

    async openDetail(comic: ListComic) {
        this.selectedComic = comic;
        setTimeout(() => {
            this.detailComponent.openModal();
        }, 0);
    }

    toggleFavorite(comicId: number) {     
        this.comicUserService.toggleFavoriteComic(comicId).subscribe((response) => {
            console.log(response.data);            
        });
    }

    closeDetail() {
        this.selectedComic = null;
    }
}
