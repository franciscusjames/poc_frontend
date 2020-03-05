import { Component, Input, OnInit } from '@angular/core';
import { FinalizadosService } from '@modules/finalizados/services/finalizados.service';

import { LoaderService } from '../../../../app/loader/loader.service';

@Component({
    selector: 'sb-ng-bootstrap-table',
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
    @Input() pageSize = 10;

    public emailsFinalizados: any;
    public totalFinalizados = 0;

    constructor(public service: FinalizadosService, private loader: LoaderService) {}

    async ngOnInit() {
        this.loader.show();
        await this.getFinalizados();
        this.loader.hide();
    }

    async getFinalizados() {
        try {
            this.emailsFinalizados = await this.service.getEmailsFinalizados();
            this.totalFinalizados = this.emailsFinalizados.length;
            console.log('tableFinalizados: ', this.emailsFinalizados);
            // console.log('Finalizados: ', this.totalFinalizados);
        } catch (err) {
            console.log('Error: ', err);
        }
        await this.formatData(this.emailsFinalizados);
    }

    async formatData(param: any) {
        param.map((email: { dataChegadaOuEnvio: { toString: () => string } }) => {
            email.dataChegadaOuEnvio = email.dataChegadaOuEnvio
                .toString()
                .replace('T', '  ')
                .replace('.000Z', '');
        });
    }
}
