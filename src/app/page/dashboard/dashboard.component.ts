import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../core/service/session.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    imports: [RouterOutlet, CommonModule, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    private sessionService = inject(SessionService);
    private router = inject(Router);

    logout() {
        this.sessionService.clearToken();
        this.router.navigate(['/login']);
    }
}
