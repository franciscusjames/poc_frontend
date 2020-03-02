import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// import { LoaderService } from '../../../../app/loading/loader.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public emailsNaoLidosCount = [];
    public emailsFiltrados = [];
    public displayTela: any;
    // public displayTela10: (() => Promise<any>) | undefined;
    public historico = [];

    // constructor(private service: DashboardService, private loader: LoaderService) {}
    constructor(private service: DashboardService) {}

    async ngOnInit() {
        // this.loader.show();
        await this.fillEmailsFiltrados();
        await this.fillEmailsCount();
        // this.displayTela10 = await this.service.getEmailsNaoLidos10dias;
        // this.loader.hide();
    }

    async fillEmailsFiltrados() {
        try {
            this.emailsFiltrados = await this.service.getEmailsFiltrados();
            console.log('emailsFiltrados: ', this.emailsFiltrados);
        } catch (err) {
            console.log('Error: ', err);
        }
    }

    async fillEmailsCount() {
        try {
            this.emailsNaoLidosCount = await this.service.getEmailsNaoLidosCount();
            console.log('emailsNaoLidosCount: ', this.emailsNaoLidosCount);
        } catch (err) {
            console.log('Error: ', err);
        }
    }

    async show10dias() {
        // this.loader.show();
        console.log('10 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos10dias();
        await this.formatData();
        // this.loader.hide();
    }

    async show7dias() {
        console.log('7 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos7dias();
        await this.formatData();
    }

    async show5dias() {
        console.log('5 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos5dias();
        await this.formatData();
    }

    async show3dias() {
        console.log('3 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos3dias();
        await this.formatData();
    }

    async show2dias() {
        console.log('2 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos2dias();
        await this.formatData();
    }

    async show1dia() {
        console.log('24hs OK');
        this.displayTela = await this.service.getEmailsNaoLidos1dia();
        await this.formatData();
    }

    async getHistorico(assunto: string) {
        console.log('getHistorico OK');
        this.historico = await this.service.postHistoricoEmail(assunto);
    }

    async formatData() {
        this.displayTela.map((email: { dataChegadaOuEnvio: { toString: () => string } }) => {
            email.dataChegadaOuEnvio = email.dataChegadaOuEnvio
                .toString()
                .replace('T', '  ')
                .replace('.000Z', '');
        });
    }
}
