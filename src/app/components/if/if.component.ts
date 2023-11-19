import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss',
  imports: [],
})
export default class IfComponent {

  readonly messageStatus = signal(false);
  readonly iconStatus = signal('right');


  showMessage() {
    this.messageStatus.set(true);
  }

  toggleIcon() {
    this.iconStatus.update((status) => status === 'right' ? 'left' : 'right');
  }
}