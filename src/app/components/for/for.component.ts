import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss',
  imports: [

  ],
})
export default class ForComponent {

  readonly users = signal<Array<string>>([]);


  addUser() {
    this.users.update((status) => {
      status.push(`user-${Math.round(Math.random() * 200)}`)
      return status;
    })
  }
}