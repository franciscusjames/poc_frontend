import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FinalizadosService } from '../../services/finalizados.service';

@Component({
    selector: 'sb-finalizados',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './finalizados.component.html',
    styleUrls: ['finalizados.component.scss'],
})
export class FinalizadosComponent implements OnInit {
    public emailsFinalizados = [];
    public totalFinalizados = 0;

    constructor(private service: FinalizadosService) {}

    async ngOnInit() {
        // await this.getFinalizados();
    }

    async getFinalizados() {
        try {
            this.emailsFinalizados = await this.service.getEmailsFinalizados();
            this.totalFinalizados = this.emailsFinalizados.length;
            console.log('emailsFinalizados: ', this.emailsFinalizados);
            console.log('totalFinalizados: ', this.totalFinalizados);
        } catch (err) {
            console.log('Error: ', err);
        }
    }
}
