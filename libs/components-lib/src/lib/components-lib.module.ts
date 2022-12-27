import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrototypeDirectiveDirective } from './prototype-directive.directive';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatTooltipModule],
  declarations: [
    PrototypeDirectiveDirective
  ],
  exports: [
    PrototypeDirectiveDirective
  ]
})
export class ComponentsLibModule {}
