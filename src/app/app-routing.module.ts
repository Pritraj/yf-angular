import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocViewEditComponent } from './components/doc-view-edit/doc-view-edit.component';
import { ScanUploadComponent } from './components/scan-upload/scan-upload.component';
import { ScanComponent } from './components/scan/scan.component';
import { SelectFilesComponent } from './components/select-files/select-files.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: 'home', component: ScanUploadComponent },
  { path: '', component: ScanUploadComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'select-files', component: SelectFilesComponent },
  { path: 'doc-view-edit', component: DocViewEditComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
