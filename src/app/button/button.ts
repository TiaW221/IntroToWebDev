import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})

export class Button {
  @Input() text: string = ':)';
  @Output() textEvent = new EventEmitter<string>();

  Send() {
    this.textEvent.emit(':(')
  }
}

