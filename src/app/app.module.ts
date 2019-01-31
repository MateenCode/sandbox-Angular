import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/Forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { UsersComponent } from "./components/users/users.component";

@NgModule({
  declarations: [AppComponent, UserComponent, UsersComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
