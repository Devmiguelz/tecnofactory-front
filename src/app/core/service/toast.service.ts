import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    private messageService = inject(MessageService);

    showSuccess(summary: string, detail: string, life: number = 3000) {
        this.messageService.add({ severity: 'success', summary, detail, key: 'br', life });
    }

    showWarn(summary: string, detail: string, life: number = 3000) {
        this.messageService.add({ severity: 'warn', summary, detail, key: 'br', life });
    }

    showError(summary: string, detail: string, life: number = 3000) {
        this.messageService.add({ severity: 'error', summary, detail, key: 'br', life });
    }

    showInfo(summary: string, detail: string, life: number = 3000) {
        this.messageService.add({ severity: 'info', summary, detail, key: 'br', life });
    }

    clear() {
        this.messageService.clear();
    }
}
