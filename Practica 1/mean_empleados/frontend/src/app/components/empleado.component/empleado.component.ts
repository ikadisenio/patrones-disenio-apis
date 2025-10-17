
import { Component, OnInit } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common'; // ✅ necesario para *ngIf, *ngFor


@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  constructor(public empleadoService:EmpleadoService) { } 
  empleado: Empleado[] = []; 
  ngOnInit(): void { 
    this.getEmpleados(); 
  }

  getEmpleados() { 
    this.empleadoService.getEmpleados().subscribe( 
      res=>{ 
        this.empleadoService.empleados=res; 
      }, 
      err=>console.error(err)
    ); 
  } 
  
  addEmpleado(form:NgForm){ 
    this.empleadoService.createEmpleado(form.value).subscribe( 
      res=>{ 
        this.getEmpleados(); 
        this.resetForm()
      }, 
      err=>console.error(err)
    ); 
  } 

  deleteEmpleado(empleado: Empleado) {
    if (empleado._id) {
      this.empleadoService.deleteEmpleado(empleado._id).subscribe(
        res => this.getEmpleados(),
        err => console.error(err)
      );
    } else {
      console.warn('Empleado no tiene _id definido');
    }
  }

  loadEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = { ...empleado }; // copia los datos al formulario
  }

  updateEmpleado() {
    const empleado = this.empleadoService.selectedEmpleado;
    if (empleado._id) {
      this.empleadoService.updateEmpleado(empleado._id, empleado).subscribe(
        res => {
          this.getEmpleados();
          this.empleadoService.selectedEmpleado = { nombre: '', cargo: '', departamento: '', sueldo: 0 }; // limpia el formulario
        },
        err => console.error(err)
      );
    }
  }

  resetForm() {
    this.empleadoService.selectedEmpleado = {
      nombre       : '',
      cargo        : '',
      departamento : '',
      sueldo       : 0
    };
  }

}

