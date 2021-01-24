import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ToolbarModule } from "primeng/toolbar";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { MonitorListComponent } from "./monitor-list/monitor-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MonitorListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    AccordionModule,
    ButtonModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
