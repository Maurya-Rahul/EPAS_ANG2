import { PipeTransform, Pipe } from '@angular/core'
import { IEmployee } from './employee'
@Pipe({
    name: 'employeePipeFilter'
}
)
export class employeePipe implements PipeTransform {
    transform(input: IEmployee[], searchText: string): IEmployee[] {
        searchText = searchText ? searchText.toLocaleLowerCase() : null;
        return searchText ? input.filter((emp: IEmployee) =>
            (emp.FirstName + " " + emp.LastName).toLocaleLowerCase().indexOf(searchText) !== -1) : input;
    }
}
