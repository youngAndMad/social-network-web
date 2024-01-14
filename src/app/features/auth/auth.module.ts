import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TuiInputModule, TuiInputNumberModule, TuiCheckboxLabeledModule, TuiSelectModule, TuiDataListWrapperModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiCheckboxLabeledModule,
    AuthRoutingModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    FormsModule
  ]
})
export class AuthModule { }
