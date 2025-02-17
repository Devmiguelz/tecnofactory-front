import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root' // Disponible en toda la app
})
export class ToastService {
    constructor(private messageService: MessageService) { }

    success(summary: string, detail: string, life: number = 3000): void {
        this.messageService.add({ severity: 'success', summary, detail, life });
    }

    info(summary: string, detail: string, life: number = 3000): void {
        this.messageService.add({ severity: 'info', summary, detail, life });
    }

    warn(summary: string, detail: string, life: number = 3000): void {
        this.messageService.add({ severity: 'warn', summary, detail, life });
    }

    error(summary: string, detail: string, life: number = 3000): void {
        this.messageService.add({ severity: 'error', summary, detail, life });
    }

    clear(): void {
        this.messageService.clear();
    }
}
