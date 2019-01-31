import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loading: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        age: 32,
        address: {
          street: "50 main st",
          city: "Los Angeles",
          state: "CA"
        }
      },
      {
        firstName: "Jimmy",
        lastName: "foe",
        email: "Jimmy@gmail.com",
        age: 32,
        address: {
          street: "22 jump st",
          city: "Sunnyvale",
          state: "CA"
        }
      },
      {
        firstName: "Jenny",
        lastName: "hoe",
        email: "Jenny@gmail.com",
        age: 24,
        address: {
          street: "16 peep st",
          city: "Atlanta",
          state: "GA"
        }
      }
    ];
    this.loading = true;

    this.addUser({
      firstName: "david",
      lastName: "kendey",
      email: "david@gmail.com"
    });
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
