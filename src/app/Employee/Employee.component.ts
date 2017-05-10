import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { IEmployee } from './Employee'
@Component({
    selector: 'emp-main',
    templateUrl: 'app/Employee/Employee.component.html'
})
export class EmployeeComponent {
    // public myForm: FormGroup;
    employees: IEmployee[];

    emp_Added(): void {
        alert("Employee added! Added employees will be displayed in the page once you click OK");
        this.employees =
            [{
                "FirstName": "Rahul",
                "LastName": "Maurya",
                "EmployeeID": "P0202",
                "Title": "SSE",
                "Domain": ".NET, Angular",
                "Email_Address": "rahul@tavant.com"
            },
            {
                "FirstName": "Akhil",
                "LastName": "Kumar",
                "EmployeeID": "P0232",
                "Title": "SSE",
                "Domain": "Java,NetBeans",
                "Email_Address": "akhil@tavant.com"
            }];
    }
}