import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TuiModule } from 'src/app/features/tui/tui.module';
import { UiModule } from '../ui/ui.module';
import { UserModule } from 'src/app/features/user/user.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, TuiModule, UiModule, UserModule],
  exports: [HomeComponent, NavbarComponent, FooterComponent],
})
export class LayoutModule {}
