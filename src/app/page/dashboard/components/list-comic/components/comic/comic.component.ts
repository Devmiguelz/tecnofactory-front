import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComic } from '../../../../model/comic.model';

@Component({
    selector: 'app-comic',
    imports: [CommonModule],
    templateUrl: './comic.component.html',
    styleUrl: './comic.component.scss'
})
export class ComicComponent {
    @Input() comic: ListComic;
    @Output() comicClicked = new EventEmitter<ListComic>(); 
    @Output() favoriteClicked = new EventEmitter<number>(); 

    viewComicDetail() {
        this.comicClicked.emit(this.comic);
    }

    toggleFavorite() {      
        this.comic.favorite = !this.comic.favorite;
        this.favoriteClicked.emit(this.comic.id);
    }
}
