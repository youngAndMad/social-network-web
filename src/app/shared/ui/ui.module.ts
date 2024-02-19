import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { TuiModule } from 'src/app/features/tui/tui.module';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [AvatarComponent, ConfirmComponent],
  imports: [CommonModule, TuiModule],
  exports: [AvatarComponent, ConfirmComponent],
})
export class UiModule {}
