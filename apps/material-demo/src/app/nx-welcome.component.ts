import { PrototypeDirectiveService } from '@a14-sandbox/components-lib';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';


/* eslint-disable */

@Component({
  selector: 'a14-sandbox-nx-welcome',
  templateUrl: "./nx-welcome.component.html",
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  public demoStatus: boolean = false;
  constructor(public prototypeService: PrototypeDirectiveService) {

    prototypeService.displayPrototype.subscribe(demoStatus => {
      this.demoStatus = demoStatus;
    });
  }

  public checkChanged(event: MatCheckboxChange): void {
    console.log(event);
    this.prototypeService.displayPrototype.next(event.checked);
  }
}
