import { NgModule } from '@angular/core';
import { TuiFilesModule } from '@taiga-ui/kit';
import { TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiErrorModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { TuiTextareaModule } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputSliderModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiSelectModule } from '@taiga-ui/kit';
import { TuiPromptModule } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { TuiDialogModule } from '@taiga-ui/core';

const modules: any[] = [
  TuiLinkModule,
  TuiPromptModule,
  TuiSelectModule,
  CommonModule,
  TuiInputDateModule,
  TuiCalendarModule,
  TuiDataListWrapperModule,
  TuiTextfieldControllerModule,
  TuiInputSliderModule,
  TuiInputNumberModule,
  TuiFilesModule,
  TuiTextareaModule,
  TuiSvgModule,
  TuiErrorModule,
  TuiInputModule,
  TuiFieldErrorPipeModule,
  TuiInputFilesModule,
  TuiButtonModule,
  TuiMarkerIconModule,
  TuiCheckboxLabeledModule,
  TuiPaginationModule,
  TuiAvatarModule,
  TuiDialogModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class TuiModule {}
