import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    // QueryList,
    // ViewChildren,
} from '@angular/core';
import { FinalizadosService } from '@modules/finalizados/services/finalizados.service';
// import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
// import { Country } from '@modules/tables/models';
// import { CountryService } from '@modules/tables/services';
// import { Observable } from 'rxjs';
@Component({
    selector: 'sb-ng-bootstrap-table',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
    @Input() pageSize = 10;

    // countries$!: Observable<Country[]>;
    // total$!: Observable<number>;
    // sortedColumn!: string;
    // sortedDirection!: string;

    public emailsFinalizados: any;
    public totalFinalizados = 0;

    // @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(public service: FinalizadosService) {}

    async ngOnInit() {
        await this.getFinalizados();
        // this.countries$ = this.countryService.countries$;
        // this.total$ = this.countryService.total$;
    }

    // onSort({ column, direction }: SortEvent) {
    //     this.sortedColumn = column;
    //     this.sortedDirection = direction;
    //     // this.countryService.sortColumn = column;
    //     // this.countryService.sortDirection = direction;
    //     this.changeDetectorRef.detectChanges();
    // }

    async getFinalizados() {
        try {
            this.emailsFinalizados = await this.service.getEmailsFinalizados();
            this.totalFinalizados = this.emailsFinalizados.length;
            console.log('tableFinalizados: ', this.emailsFinalizados);
            console.log('Finalizados: ', this.totalFinalizados);
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
