import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-finalizados-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './finalizados-tables.component.html',
    styleUrls: ['finalizados-tables.component.scss'],
})
export class FinalizadosTablesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
