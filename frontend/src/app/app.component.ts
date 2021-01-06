import { Component, OnInit } from "@angular/core";
import { HealthService } from "./health-service.service";
import { Monitor } from "./monitor.entity";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  static alias = "app";

  monitors: Array<Monitor>;

  constructor(private _healthService: HealthService) {}

  ngOnInit(): void {
    const sub = this._healthService.getGreetings().subscribe((value: Array<Monitor>) => {
      this.monitors = value;
      sub.unsubscribe();
    });
  }
}
