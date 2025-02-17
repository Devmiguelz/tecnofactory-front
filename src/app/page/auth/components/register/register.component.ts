import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
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

    registerForm: FormGroup = this.fb.group(
        {
            name: ['', Validators.required],
            identification: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required] 
        },
        { 
            validators: this.passwordsMatchValidator 
        }
    );

    register() {
        if (!this.registerForm.valid) {
            this.registerForm.markAllAsTouched();
            return;
        }

        this.loading = true;
        this.authService.register(this.registerForm.value).subscribe(() => {
            this.toastService.success('Success', 'User registered successfully', 1450);
            this.loading = false;
            setTimeout(() => {
                this.redirectLogin();
            }, 1500);
        }, error => {
            setTimeout(() => {
                console.log(error);
                this.loading = false;
                this.toastService.warn('Error', error.error.failures.toString());
            }, 1500);
        });

    }

    redirectLogin() {
        this.router.navigate(['/login']);
    }

    passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
        const password = form.get('password')?.value;
        const confirmPassword = form.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { passwordMismatch: true };
    }
}
