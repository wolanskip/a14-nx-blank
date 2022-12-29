import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import {  MatIcon } from "@angular/material/icon";
import { PrototypeDirectiveService } from "./prototype-service";

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: "[prototype]"
})
export class PrototypeDirective implements OnInit {

    @Input() public prototype = "";

    public icon: HTMLElement | null = null;
    public iconParent: HTMLElement | null = null;

    constructor(
        private elementRef: ElementRef,
        private vcRef: ViewContainerRef,
        private prototypeDirectiveService: PrototypeDirectiveService,
        private renderer: Renderer2
    ) {
    }

    public ngOnInit(): void {
        this.prototypeDirectiveService.displayPrototype.subscribe(previewMode => {
            this.redrawChanges(previewMode);
        });
    }

    public redrawChanges(previewMode: boolean): void {
        // reset the view container
        //this.vcRef.clear();

        if (previewMode) {
            // this inserts a mat-icon for a warning
            this.icon = this.renderer.createElement('mat-icon');
            this.renderer.appendChild(this.icon, this.renderer.createText("rebase_edit"));
            this.renderer.addClass(this.icon, "mat-icon");
            this.renderer.addClass(this.icon, "material-icons");


            let parent = this.elementRef.nativeElement;
            let beforeChild = this.elementRef.nativeElement.firstChild;

            const foundWicCard = this.findWicCard(parent);
            if (foundWicCard) {
              parent = foundWicCard;
              beforeChild = parent.firstChild;
            }

            this.iconParent = parent;

            this.renderer.insertBefore(parent, this.icon, beforeChild);


        }
        else {
          this.renderer.removeChild(this.iconParent, this.icon);
        }

    }

    public findWicCard(parent: any): any {
      console.log(parent.nodeName);
      if (parent.nodeName === "DIV") {
        return parent;
      }

      for (let i = 0; i < parent.children.length; i++ )
      {
          const child = parent.children[i];
          const result = this.findWicCard(child);
          if (result) {
            return result;
          }
      }
      return null;
    }
}
