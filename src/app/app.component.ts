import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { HelloComponent } from "./hello.component";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  widget = true;
  @ViewChild("mainDiv", { static: false }) mainDiv: ElementRef;
  matDialogRef: MatDialogRef<HelloComponent>;
  name: string = "";
  constructor(private matDialog: MatDialog) {}
  OpenModal() {
    this.mainDiv.nativeElement.classList.add('disable-div');
    this.matDialogRef = this.matDialog.open(HelloComponent, {
      data: { name: this.name },
      disableClose: true,
      hasBackdrop: false
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.name = "";
      }
      this.mainDiv.nativeElement.classList.remove('disable-div');
    });
  }
}
