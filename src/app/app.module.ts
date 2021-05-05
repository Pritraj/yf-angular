import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanUploadComponent } from './components/scan-upload/scan-upload.component';
import { ScanComponent } from './components/scan/scan.component';
import { UploadComponent } from './components/upload/upload.component';
import { SelectFilesComponent } from './components/select-files/select-files.component';
import { DocViewEditComponent } from './components/doc-view-edit/doc-view-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanUploadComponent,
    ScanComponent,
    UploadComponent,
    SelectFilesComponent,
    DocViewEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
