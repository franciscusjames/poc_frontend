import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// import { LoaderService } from '../../../../app/loading/loader.service';
import { FinalizadosService } from '../../services/finalizados.service';

@Component({
    selector: 'sb-finalizados',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './finalizados.component.html',
    styleUrls: ['finalizados.component.scss'],
})
export class FinalizadosComponent implements OnInit {
    public emailsNaoLidosCount = [];
    public emailsFiltrados = [];
    public displayTela: any;
    // public displayTela10: (() => Promise<any>) | undefined;
    public historico = [];

    // constructor(private service: FinalizadosService, private loader: LoaderService) {}
    constructor(private service: FinalizadosService) {}

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

    async finalizarEmail(assunto: string) {
        const finalizarEmail = await this.service.putFinalizarEmail(assunto);
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
        // await this.formatData(this.displayTela);
        // this.loader.hide();
    }

    async show7dias() {
        console.log('7 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos7dias();
        // await this.formatData(this.displayTela);
    }

    async show5dias() {
        console.log('5 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos5dias();
        // await this.formatData(this.displayTela);
    }

    async show3dias() {
        console.log('3 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos3dias();
        // await this.formatData(this.displayTela);
    }

    async show2dias() {
        console.log('2 dias OK');
        this.displayTela = await this.service.getEmailsNaoLidos2dias();
        // await this.formatData(this.displayTela);
    }

    async show1dia() {
        console.log('24hs OK');
        this.displayTela = await this.service.getEmailsNaoLidos1dia();
        // await this.formatData(this.displayTela);
    }

    async getHistorico(assunto: string) {
        console.log('getHistorico OK');
        this.historico = [];
        this.historico = await this.service.postHistoricoEmail(assunto);
        await this.formatData(this.historico);
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