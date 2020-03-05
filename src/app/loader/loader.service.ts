import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from './loader.component';

@Injectable({
    providedIn: 'root'
})

export class LoaderService {

    dialogRef: any;

    constructor(private dialog: MatDialog) { }

    show() {
        this.dialogRef = this.dialog.open(LoaderComponent, {
            panelClass: 'backgroundPanel',
            disableClose: true
        });
    }

    hide() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

}
