import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiFilesModule } from '@taiga-ui/kit';
import { TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
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


const modules: any[] = [
  CommonModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
  TuiInputSliderModule,
  TuiFilesModule,
  TuiTextareaModule,
  TuiErrorModule,
  TuiInputModule,
  TuiFieldErrorPipeModule,
  TuiInputFilesModule,
  TuiButtonModule,
  TuiMarkerIconModule,
  TuiCheckboxLabeledModule,
  TuiPaginationModule,
  TuiAvatarModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class TuiModule { }
