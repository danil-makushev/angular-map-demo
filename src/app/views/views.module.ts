import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MapsModule } from '../maps/maps.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MapsModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
