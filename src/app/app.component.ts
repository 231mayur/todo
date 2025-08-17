import { Component } from '@angular/core';
import { HeaderComponet } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy.users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponet, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;

  selectedUserOn : any ="";

  onSelectUser(id: string) {
    this.selectedUserOn = DUMMY_USERS.find(user => user.id === id);
  }
  
}
