import { Component, Inject, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private loginService = inject(LoginService);
  private router = inject (Router);
  private fb = inject(FormBuilder);

  public form!: FormGroup;

  ngOnInit( ) {
  this.form = this.fb.group({
    forms: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  }

  login() {
    this.loginService.login(
      this.form?.get('email')?.value, 
      this.form?.get('password')?.value)
      .subscribe({
        next: (res) => {
          // token
          this.router.navigate(['dashboard-deport']);
          // llamar a un metodo del servicio que guarde el token en localstorage
          console.log(res);
        },
        error: (e) => {
          //mostrar mensaje de error sacandolo de error
          console.log(e.error.error);
        }
      });
  }
}
