import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';

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


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 passwordFormControl = new FormControl('', [Validators.required]);
  constructor(){
    
  }

  login(){
    this.loginService.login("luisoguti09@gmail.com","1234586")
      .subscribe({
        next: (res) => {
          // token
          // llamar a un metodo del servicio que guarde el token en localstorage
          console.log(res);
          
        },
        error: (e)  => {
          //mostrar mensaje de error sacandolo de error
          console.log(e.error.error);
          
        }
      });
      
      
  }
}
