import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task.model';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  
  @Output() addTask = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  cancelDialog()
  {
    this.cancel.emit();
  }

  onSubmit()
  {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate : this.enteredDate
    })
  }
}
