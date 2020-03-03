import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-finalizados-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './finalizados-charts.component.html',
    styleUrls: ['finalizados-charts.component.scss'],
})
export class FinalizadosChartsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
