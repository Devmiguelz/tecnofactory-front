import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Result } from '../../../core/model/result.model';
import { Observable } from 'rxjs';
import { ListComic } from '../model/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

    private apiUrl = `${environment.api_url}/api/Comic`;

    constructor(private http: HttpClient) { }

    getComics(): Observable<Result<ListComic[]>> {
        return this.http.get<Result<ListComic[]>>(`${this.apiUrl}/GetComics`);
    }
}
