import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable(
    {providedIn: "root"}
)
export class PrototypeDirectiveService {

    public displayPrototype = new BehaviorSubject<boolean>(true);
}
