import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CommonModule } from '@angular/common'
import { EmployeeService } from './employee.service'
import { employeeComponent } from './Employee.Component'

@NgModule(
    {
        imports: [HttpModule, FormsModule,
            CommonModule, RouterModule.forChild([
                { path: 'Employee', component: employeeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ])
        ],
        declarations: [employeeComponent],
        providers: []
    })
export class employeeModule {

}