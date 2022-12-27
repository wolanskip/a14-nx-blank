import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable(
  {providedIn: "root"}
)
export class ApplicationStatusService {
  public subject = new BehaviorSubject<boolean>(true);
}
