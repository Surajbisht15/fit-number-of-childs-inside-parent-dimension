import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetComponent } from './widget/widget.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports:      [
   BrowserModule,
   BrowserAnimationsModule,
   FormsModule,
   MatDialogModule,
   MatButtonModule,
   MatInputModule,
   MatSelectModule,
   MatFormFieldModule ],
  declarations: [AppComponent, HelloComponent, WidgetComponent],
  entryComponents: [HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
