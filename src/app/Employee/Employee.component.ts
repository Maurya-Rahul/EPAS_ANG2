import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'emp-main',
    templateUrl: 'app/Employee/employee.component.html',
    styleUrls: ['app/Employee/employee.component.css'],
    providers: [EmployeeService]
})
export class employeeComponent {
    searchItem: string;
    errorMessage: string;
    employees: IEmployee[];
    isVisible: boolean = true;

    constructor(private _empService: EmployeeService) {

    }
    ngOnInit(): void {
        this._empService.getEmployees()
            .subscribe(
            employees => this.employees = employees,
            error => this.errorMessage = error);
    }

    emp_Added(): void {

        if (this.isVisible) {
            this.employees = null;
        }
        else {
            this._empService.getEmployees()
                .subscribe(
                employees => this.employees = employees,
                error => this.errorMessage = error);
        }
        this.isVisible = !this.isVisible;

    }
}