import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({ required: true }) id!: string;

  // @Input({ required: true }) avatar!: string;

  // @Input({ required: true }) name !: string;

  @Input({required : true}) selected !: boolean;

  @Input({required : true}) user !: User;

  @Output() select = new EventEmitter();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }


  onSelectedUser() {

    this.select.emit(this.user.id);

  }

}
