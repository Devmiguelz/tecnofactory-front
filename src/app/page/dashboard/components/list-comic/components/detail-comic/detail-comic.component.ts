import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';
import { ListComic } from '../../../../model/comic.model';

@Component({
    selector: 'app-detail-comic',
    imports: [CommonModule],
    templateUrl: './detail-comic.component.html',
    styleUrl: './detail-comic.component.scss'
})
export class DetailComicComponent implements AfterViewInit {
    @Input() selectedComic: ListComic | null = null;
    @Output() close = new EventEmitter<void>();
    @ViewChild('comicDetailModal') modalElement!: ElementRef;

    private modalInstance!: Modal;

    ngAfterViewInit() {
        this.modalInstance = new Modal(this.modalElement.nativeElement);
    }

    openModal() {
        this.modalInstance.show();
    }

    closeModal() {
        this.modalInstance.hide();
    }
}
