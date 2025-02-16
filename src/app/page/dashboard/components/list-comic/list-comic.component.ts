import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    @Input() delete: boolean = false;

    @ViewChild('detailComponent') detailComponent!: DetailComicComponent;

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
            if(this.delete) {
                this.comics = this.comics.filter(comic => comic.id !== comicId);
            }       
        });
    }

    closeDetail() {
        this.selectedComic = null;
    }
}
