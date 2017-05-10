import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { WelcomeComponent } from './home/welcome.component'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { EmployeeModule } from './Employee/Employee.module'
import { EmployeeComponent } from './Employee/Employee.component'

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'Employee', component: EmployeeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [AppComponent, WelcomeComponent, EmployeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
