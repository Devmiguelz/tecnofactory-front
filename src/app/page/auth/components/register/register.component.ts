import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../../../../core/service/toast.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule, ButtonModule, ToastModule, CommonModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);
    private toastService = inject(ToastService);

    loading: boolean = false;

    registerForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        identification: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });

    register() {
        this.toastService.showSuccess('Success', 'User registered successfully');                 
        if (this.registerForm.valid) {
            this.loading = true;
            this.authService.register(this.registerForm.value).subscribe(() => {
                this.loading = false;       
                this.redirectLogin();             
            }, error => {
                setTimeout(() => {
                    this.loading = false;   
                    this.toastService.showWarn('Error', 'Registration');                 
                }, 1500);
            });
        }
    }

    redirectLogin() {
        this.router.navigate(['/login']);
    }
}
