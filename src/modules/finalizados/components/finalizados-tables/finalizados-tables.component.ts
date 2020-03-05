import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FinalizadosService } from '@modules/finalizados/services/finalizados.service';

@Component({
    selector: 'sb-finalizados-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './finalizados-tables.component.html',
    styleUrls: ['finalizados-tables.component.scss'],
})
export class FinalizadosTablesComponent implements OnInit {
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
