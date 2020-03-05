import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    // declarations: [AppComponent, LoadingComponent],
    declarations: [AppComponent, LoaderComponent],
    imports: [BrowserAnimationsModule, AppRoutingModule, HttpClientModule, MatProgressSpinnerModule, MatDialogModule],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [LoaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
