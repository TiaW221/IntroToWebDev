import {Component, input, Input} from '@angular/core';
import {topOfPageTitle} from '../../Components/title/title';
import {Button} from '../../button/button';
import {InputBox} from '../../input-box/input-box';
import {NgIf, NgStyle} from '@angular/common';
@Component({
  selector: 'app-homepage',
  imports: [
    topOfPageTitle, NgIf, NgStyle
  ],
  // Button, InputBox
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})

export class Homepage {
  // Log(eventText: string) {
  //   console.log(eventText);
  // }

  // log(eventText: any): void {
  //   console.log(eventText);

  // Work with Matt today
  showButton = false;
  counter = 5;

  books = [
    {name: 'Book 1', author: 'Author A'},
    {name: 'Book 2', author: 'Author B'},
    {name: 'Book 3', author: 'Author C'}]

  mode = '';

  //toggle, if it's true, it'll change to false.
  // If it's false, it'll change to true.
  toggleShowButton() {
    this.showButton = !this.showButton;
  }

  increaseCount() {
    this.counter = this.counter + 1;
  }

  decreaseCount() {
    this.counter = this.counter - 1;
  }
}








