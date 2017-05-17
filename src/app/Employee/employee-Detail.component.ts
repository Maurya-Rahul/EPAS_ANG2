import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEmployee } from './Employee'
import { EmployeeService } from './employee.service'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'emp-Detail',
    moduleId: module.id,
    templateUrl: 'employee-Detail.component.html',
    providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {
    // employees: IEmployee[];
    employee: IEmployee;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, private _empService: EmployeeService, private _router: Router) {
        console.log(this._route.snapshot.params['id']);
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getEmployee(id);
            });
    }

    getEmployee(id: string) {
        this._empService.getEmployee(id).subscribe(
            p => this.employee = p,
            error => this.errorMessage = <any>error);
    }
    onBack() {
        this._router.navigate(['/Employee']);
    }
}