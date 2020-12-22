import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HealthService {

  constructor(private _http: HttpClient) {}

  getGreetings(): Observable<string> {
    return this._http.get("/api/greetings", {responseType: "text"});
  }
}
