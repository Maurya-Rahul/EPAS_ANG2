import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CommonModule } from '@angular/common'

import { EmployeeComponent } from './Employee.Component'

@NgModule
    (
    {
        imports: [HttpModule, FormsModule,
            CommonModule,
            RouterModule.forChild([
                { path: 'Employee', component: EmployeeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ])
        ],
        declarations: [EmployeeComponent],
        providers: []
    })
export class EmployeeModule {

}