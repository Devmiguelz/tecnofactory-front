import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../service/session.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        private sessionService: SessionService,
        private router: Router
    ) { }

    canActivate(): boolean {        
        if (!this.sessionService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['dashboard']);
            return false;
        }
    }
}
