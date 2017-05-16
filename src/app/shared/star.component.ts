import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core'
@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() {
        this.starWidth = this.rating * (86 / 5);
    }
    onClick() {
        this.notify.emit(`The rating ${this.rating} was clicked!`);
    }
}