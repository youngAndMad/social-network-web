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


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TuiFilesModule,
    TuiTextareaModule,
    TuiErrorModule,
    TuiInputModule,
    TuiFieldErrorPipeModule,
    TuiInputFilesModule,
    TuiButtonModule,
    TuiMarkerIconModule,
    TuiCheckboxLabeledModule
  ],
  exports:[
    TuiFilesModule,
    TuiTextareaModule,
    TuiErrorModule,
    TuiInputModule,
    TuiFieldErrorPipeModule,
    TuiInputFilesModule,
    TuiButtonModule,
    TuiMarkerIconModule,
    TuiCheckboxLabeledModule
  ]
})
export class TuiModule { }
