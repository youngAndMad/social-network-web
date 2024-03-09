import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiModule } from 'src/app/features/tui/tui.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { FileInputComponent } from './file-input/file-input.component';

@NgModule({
  declarations: [ConfirmComponent, FileInputComponent],
  imports: [CommonModule, TuiModule],
  exports: [ConfirmComponent, FileInputComponent],
})
export class UiModule {}
