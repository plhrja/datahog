import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Monitor } from "./monitor.entity";

@Injectable({
  providedIn: "root"
})
export class MonitorService {

  constructor(private _http: HttpClient) {}

  getMonitors(): Observable<Array<Monitor>> {
    return this._http.get<Array<{endpoint: string, schedule: string}>>("/api/monitor")
      .pipe(map(response => response.map(json => new Monitor(json.endpoint, json.schedule))));
  }
}
