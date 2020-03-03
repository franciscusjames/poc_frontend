import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-finalizados-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './finalizados-cards.component.html',
    styleUrls: ['finalizados-cards.component.scss'],
})
export class FinalizadosCardsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
