import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoDataService } from "./todo-data.service";
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ContainerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
