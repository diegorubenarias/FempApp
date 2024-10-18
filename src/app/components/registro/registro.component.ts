import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
}) 
export class RegistroComponent {

  public form!: FormGroup;
  
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private regServ =inject(RegistroService);
  
  ngOnInit() {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      edad: new FormControl(0),
      nivel: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPass: new FormControl('', [Validators.required]),
    });
  }

  verificarPass() {
    if (this.form?.get('password')?.value == this.form?.get('confirmPass')?.value) {
      return true;
    } else {
      error: (e: { error: { error: any; }; }) => {
        //mostrar mensaje de error sacandolo de error
        console.log(e.error.error);
      };
      return false;
    }
  }

  guardar() {
    if (this.verificarPass()) {
      console.log(this.form);
      this.regServ.guardar(
        this.form?.get('nombre')?.value,
        this.form?.get('edad')?.value,
        this.form?.get('nivel')?.value,
        this.form?.get('email')?.value,
        this.form?.get('password')?.value,
      )
        .subscribe((res: any) => {
          console.log(res);
          this.router.navigate(['dashboard-deport']);
        },
        )
    }
  }
}

