import { Injectable } from '@angular/core'
import { IEmployee } from './employee'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class EmployeeService {
    private _path: string = 'api/Json/employee.json';
    constructor(private _http: Http) {

    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get(this._path).
            map((response: Response) => <IEmployee[]>response.json())
            .do(data => console.log('All : ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getEmployee(id: string): Observable<IEmployee> {
        return this.getEmployees()
            .map((emp: IEmployee[]) => emp.find(p => p.EmployeeID === id));
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error')
    }
}