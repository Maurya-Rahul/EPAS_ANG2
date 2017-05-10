"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeComponent = (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.emp_Added = function () {
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
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'emp-main',
        templateUrl: 'app/Employee/Employee.component.html'
    })
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=Employee.Component.js.map