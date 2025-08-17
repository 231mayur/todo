import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from "../user/user.model";
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, FormsModule, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) user !: User;
  isTaskAdding = false;

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get getImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onComplete(id: string) {

    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
  }

  addTask() {
    this.isTaskAdding = true;
  }

  onCancelClick() {
    this.isTaskAdding = false;
  }

  onNewTaskAdded(addTask: NewTask)
  {
    this.dummyTasks.unshift({
      id: crypto.randomUUID().toString(),
      userId : this.user.id,
      title: addTask.title,
      summary: addTask.summary,
      dueDate: addTask.dueDate
    });

    this.isTaskAdding = false;
  }

}
