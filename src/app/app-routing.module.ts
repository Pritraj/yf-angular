import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanUploadComponent } from './components/scan-upload/scan-upload.component';
import { ScanComponent } from './components/scan/scan.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: 'home', component: ScanUploadComponent },
  { path: '', component: ScanUploadComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
