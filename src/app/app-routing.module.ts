import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanUploadComponent } from './components/scan-upload/scan-upload.component';

const routes: Routes = [{path:'home', component:ScanUploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
