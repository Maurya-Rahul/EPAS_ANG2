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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var router_2 = require("@angular/router");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(_route, _empService, _router) {
        this._route = _route;
        this._empService = _empService;
        this._router = _router;
        console.log(this._route.snapshot.params['id']);
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._empService.getEmployees().
            subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/Employee']);
    };
    return EmployeeDetailComponent;
}());
EmployeeDetailComponent = __decorate([
    core_1.Component({
        selector: 'emp-Detail',
        moduleId: module.id,
        templateUrl: 'employee-Detail.component.html',
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, employee_service_1.EmployeeService, router_2.Router])
], EmployeeDetailComponent);
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-Detail.component.js.map