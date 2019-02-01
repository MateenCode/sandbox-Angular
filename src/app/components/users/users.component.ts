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
  enableAdd: boolean = true;

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
        },
        image: "http://lorempixel.com/600/600/people/3"
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
        },
        image: "http://lorempixel.com/600/600/people/2"
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
        },
        image: "http://lorempixel.com/600/600/people/1"
      }
    ];
    this.loading = true;

    // this.addUser({
    //   firstName: "david",
    //   lastName: "kendey",
    //   email: "david@gmail.com"
    // });
  }
  // addUser(user: User) {
  //   this.users.push(user);
  // }
}
