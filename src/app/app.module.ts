import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component';

@NgModule({
    // declarations: [AppComponent, LoadingComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatProgressSpinnerModule],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [],
})
export class AppModule {}
