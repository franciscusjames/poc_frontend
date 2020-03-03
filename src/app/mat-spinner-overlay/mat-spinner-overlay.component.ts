import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sb-mat-spinner-overlay',
    templateUrl: './mat-spinner-overlay.component.html',
    styleUrls: ['./mat-spinner-overlay.component.scss'],
})
export class MatSpinnerOverlayComponent implements OnInit {
    constructor() {}

    @Input() value = 100;
    @Input() diameter = 100;
    @Input() mode = 'indeterminate';
    @Input() strokeWidth = 10;
    @Input() overlay = true;
    @Input() color = 'primary';

    ngOnInit(): void {}
}
