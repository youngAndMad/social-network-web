import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TuiModule } from 'src/app/features/tui/tui.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, TuiModule, UiModule],
  exports: [HomeComponent, NavbarComponent, FooterComponent],
})
export class LayoutModule {}
