
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from "@angular/material/card";
import { ComponentsLibModule } from '@a14-sandbox/components-lib';
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, ComponentsLibModule, MatIconModule, MatCheckboxModule, MatTooltipModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
