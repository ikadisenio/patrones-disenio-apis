import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empleado} from '../models/empleado'

@Injectable({
  providedIn: 'any'
})

export class EmpleadoService {
  URL_API='http://localhost:3000/api/empleados'; 
    empleados : Empleado[] = []; 
    selectedEmpleado: Empleado={ 
      nombre        : '', 
      cargo         : '', 
      departamento  : '', 
      sueldo        : 0 
    } 
  
  constructor(private http: HttpClient) { 

  } 

  getEmpleados(){ 
    return this.http.get<Empleado[]>(this.URL_API); 
  }
  
  createEmpleado(empleado:Empleado){ 
    return this.http.post(this.URL_API,empleado); 
  } 

  deleteEmpleado(_id: string){ 
    return this.http.delete(`${this.URL_API}/${_id}`);
  } 

  updateEmpleado(_id: string, empleado:Empleado){ 
    return this.http.put(`${this.URL_API}/${_id}`, empleado);
  } 
}

