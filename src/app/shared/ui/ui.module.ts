import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { TuiModule } from 'src/app/features/tui/tui.module';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, TuiModule],
  exports: [AvatarComponent],
})
export class UiModule {}
