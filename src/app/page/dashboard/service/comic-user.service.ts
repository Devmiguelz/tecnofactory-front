import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../../../core/model/result.model';
import { ListComic } from '../model/comic.model';

@Injectable({
    providedIn: 'root'
})
export class ComicUserService {

    private apiUrl = `${environment.api_url}/api/ComicUser`;

    constructor(private http: HttpClient) { }

    getFavoriteComics(): Observable<Result<ListComic[]>> {
        return this.http.get<Result<ListComic[]>>(`${this.apiUrl}/Get`);
    }

    toggleFavoriteComic(comicId: number): Observable<Result<string>> {
        return this.http.post<Result<string>>(`${this.apiUrl}/AddOrDelete/${comicId}`, {});
    }
}
