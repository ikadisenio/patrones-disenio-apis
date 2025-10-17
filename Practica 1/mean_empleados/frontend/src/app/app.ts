import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { EmpleadoComponent } from './components/empleado.component/empleado.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadoComponent,
            CommonModule,
            HttpClientModule,
            FormsModule
          ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {
  protected readonly title = signal('frontend');
}
