import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { SessionService } from '../../../core/service/session.service';
import { Result } from '../../../core/model/result.model';
import { LoginResponse, RegisterUser } from '../model/auth.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.api_url}/api/Auth`;

    constructor(private http: HttpClient, private sessionService: SessionService) { }

    login(email: string, password: string): Observable<Result<LoginResponse>> {
        return this.http.post<Result<LoginResponse>>(`${this.apiUrl}/login`, { email, password });
    }

    register(user: RegisterUser): Observable<any> {
        return this.http.post<Result<string>>(`${this.apiUrl}/register`, user);
    }

    logout(): void {
        this.sessionService.clearToken();
    }
}