"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var employeeComponent = (function () {
    function employeeComponent(_empService) {
        this._empService = _empService;
        this.isVisible = false;
    }
    employeeComponent.prototype.ngOnInit = function () {
    };
    employeeComponent.prototype.emp_Added = function () {
        var _this = this;
        this.isVisible = !this.isVisible;
        if (this.isVisible) {
            this._empService.getEmployees()
                .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.employees = null;
        }
    };
    return employeeComponent;
}());
employeeComponent = __decorate([
    core_1.Component({
        selector: 'emp-main',
        templateUrl: 'app/Employee/employee.component.html',
        styleUrls: ['app/Employee/employee.component.css'],
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], employeeComponent);
exports.employeeComponent = employeeComponent;
//# sourceMappingURL=Employee.Component.js.map