import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrComponent } from './components/qr/qr.component';
import { QrService } from './services/qr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QrComponent
  ],
  exports: [QrComponent]
})
export class QrModule { }
