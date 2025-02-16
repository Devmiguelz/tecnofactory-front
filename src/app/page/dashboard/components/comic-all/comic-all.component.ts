import { Component, inject, OnInit } from '@angular/core';
import { ListComicComponent } from '../list-comic/list-comic.component';
import { ComicService } from '../../service/comic-all.service';
import { ListComic } from '../../model/comic.model';

@Component({
  selector: 'app-comic-all',
  imports: [ListComicComponent],
  templateUrl: './comic-all.component.html',
  styleUrl: './comic-all.component.scss'
})
export class ComicAllComponent implements OnInit {
    
    private comicService = inject(ComicService);

    loadingSkeleton: boolean = true;
    listComic: ListComic[] = [];

    ngOnInit(): void {
        this.comicService.getComics().subscribe((response) => {
            this.listComic = response.data;
            this.loadingSkeleton = false;
        }); 
    }
}
