import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { SessionService } from '../../../../core/service/session.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, CommonModule, ReactiveFormsModule, ButtonModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private sessionService = inject(SessionService);
    private router = inject(Router);

    loading: boolean = false;

    loginForm: FormGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    login() {
        if (this.loginForm.valid) {
            this.loading = true;
            this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(response => {
                this.sessionService.setToken(response.data.token);
                this.loading = false;
                this.router.navigate(['/dashboard']);               
            }, error => {
                setTimeout(() => {
                    this.loading = false;                    
                }, 1500);
            });
        }
    }

    redirectRegister() {
        this.router.navigate(['/register']);
    }
}
