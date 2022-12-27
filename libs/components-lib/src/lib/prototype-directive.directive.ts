import { ApplicationStatusService } from './application-status.service';
import { DOCUMENT } from '@angular/common';
import { ComponentRef, Directive, ElementRef, Inject, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {  MatIcon } from "@angular/material/icon";
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[prototype]',
  providers: [MatTooltip]
})
export class PrototypeDirectiveDirective implements OnInit {

    constructor(
      private el: ElementRef,
      private renderer: Renderer2,
      @Inject(DOCUMENT) private document: Document,
      private templateRef: TemplateRef<any>,
      private vcRef: ViewContainerRef,
      private statusService: ApplicationStatusService,
      private tooltip: MatTooltip

    ) {
        if (this.el.nativeElement.style){
          this.el.nativeElement.style.backgroundColor = 'yellow';
        }

     }

  public ngOnInit(): void {
    this.statusService.subject.subscribe(previewMode => {
      this.redrawChanges(previewMode);
    });
  }

  public redrawChanges(previewMode: boolean): void {
    // reset the view container
    this.vcRef.clear();

    if (previewMode){
      // this inserts a mat-icon for a warning
      const searchIcon = this.vcRef.createComponent<MatIcon>(MatIcon, {index: 0});
      searchIcon.instance._elementRef.nativeElement.innerHTML = 'rebase_edit';
    }

    this.tooltip.message = "Something goes here"

    if (this.templateRef.elementRef.nativeElement.style){
      this.templateRef.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }




    // this will append the original content.
    this.vcRef.createEmbeddedView(this.templateRef);
    this.vcRef.element.nativeElement.innerHTML += "TESTNG";
  }
}
