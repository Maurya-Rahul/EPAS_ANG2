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
export class employeeComponent implements OnInit {
    public myForm: FormGroup;
    searchItem: string;
    errorMessage: string;
    employees: IEmployee[];
    isVisible: boolean = true;

    constructor(private _empService: EmployeeService, private _fb: FormBuilder) {

    }
    ngOnInit(): void {
        this.myForm = this._fb.group({
            FirstName: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            LastName: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            EmployeeID: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            Title: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            Domain: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            Email_Address: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
        });

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

    onRatingClicked(message: string) {
        alert(message);
    }
    // save(model: User, isValid: boolean) {
    //     this.submitted = true;
    //     console.log(model, isValid);
    // }
}