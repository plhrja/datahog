import { Component, OnInit } from "@angular/core";
import { HealthService } from "./health-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  static alias = "app";

  greetings: string;

  constructor(private _healthService: HealthService) {}

  ngOnInit(): void {
    const sub = this._healthService.getGreetings().subscribe((value: string) => {
      this.greetings = value;
      sub.unsubscribe();
    });
  }
}
