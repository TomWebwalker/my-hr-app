import {Component, inject} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {EmployeesService} from './employees.service';


@Component({
  selector: 'app-employees',
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export default class EmployeesComponent {
  readonly employeesResource = inject(EmployeesService).employeesResource;
}
