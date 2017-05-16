import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEmployee } from './Employee'
import { EmployeeService } from './employee.service'
import { Router } from '@angular/router'
@Component({
    selector: 'emp-Detail',
    moduleId: module.id,
    templateUrl: 'employee-Detail.component.html',
    providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {
    employees: IEmployee[];
    employee: IEmployee;
    errorMessage: string;

    constructor(private _route: ActivatedRoute, private _empService: EmployeeService, private _router: Router) {
        console.log(this._route.snapshot.params['id']);
    }

    ngOnInit() {
        this._empService.getEmployees().
            subscribe(
            employees => this.employees = employees,
            error => this.errorMessage = error
            )
    }
    onBack() {
        this._router.navigate(['/Employee']);
    }
}