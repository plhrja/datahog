import { Component, OnInit } from "@angular/core";
import { Monitor } from "./monitor.entity";
import { MonitorService } from "./monitor.service";

@Component({
  selector: "monitor-list",
  templateUrl: "./monitor-list.component.html",
  styleUrls: ["./monitor-list.component.less"]
})
export class MonitorListComponent implements OnInit {
  static alias = "monitor-list";

  monitors: Array<Monitor>;

  constructor(private _service: MonitorService) { }

  ngOnInit(): void {
    const sub = this._service.getMonitors().subscribe((value: Array<Monitor>) => {
      this.monitors = value;
      sub.unsubscribe();
    });
  }
}
