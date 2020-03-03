/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { ChartsModule } from '@modules/charts/charts.module';
import { TablesModule } from '@modules/tables/tables.module';

/* Components */
import * as finalizadosComponents from './components';

/* Containers */
import * as finalizadosContainers from './containers';

/* Guards */
import * as finalizadosGuards from './guards';

/* Services */
import * as finalizadosServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppCommonModule,
        NavigationModule,
        ChartsModule,
        TablesModule,
    ],
    providers: [...finalizadosServices.services, ...finalizadosGuards.guards],
    declarations: [...finalizadosContainers.containers, ...finalizadosComponents.components],
    exports: [...finalizadosContainers.containers, ...finalizadosComponents.components],
})
export class FinalizadosModule {}
