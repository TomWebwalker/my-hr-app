import {Injectable} from '@angular/core';
import {httpResource} from '@angular/common/http';

interface Employee {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

@Injectable({providedIn: 'root'})
export class EmployeesService {
  readonly employeesResource = httpResource<Employee[]>('https://67f28b29ec56ec1a36d36920.mockapi.io/employees');
}
