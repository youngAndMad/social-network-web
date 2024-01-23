import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  declarations: [
    CreateNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
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
export class NewsModule { }
