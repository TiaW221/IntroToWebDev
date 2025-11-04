import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {topOfPageTitle} from '../../Components/title/title';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-matt-page',
  imports: [
    topOfPageTitle,
    NgStyle,
    // NgForOf
  ],
  templateUrl: './matt-page.html',
  styleUrl: './matt-page.scss',
})
export class MattPage {

  // Control Flow (@if, @else, @switch)
  // Show a <p> tag that only appears when showMessage is true using @if.
  // Use @if and @else to display:
  // <p>Welcome back!</p> when loggedIn is true
  // <p>Please sign in.</p> when loggedIn is false
  // Use @switch on a variable called connectionStatus to show one of three <p> tags:
  // “Connecting…”
  // “Connected!”
  // “Disconnected!”
  showMessage = false;
  loggedIn = true;
  connectionStatus = '';

// 🔁 Looping with @for
//   Use @for to display a list of task names inside a <ul> using a variable called tasks.
//   Inside the @for, show the index number before each task name (e.g., “1. Buy milk”).
//   Within the @for, use @if to only display a <li> when the task’s completed property is true.

  showTasks = true;
  tasks: ({ name: string, completed: boolean })[] = [
    {name: "clean house", completed: false},
        {name: "go to the gym", completed: false},
        {name: "do uni work", completed: false},
        {name: "buy milk", completed: false},
        {name: "", completed: false},
        {name: "", completed: false},
  ]

// 🎛️ Conditional Display
//   Use @if with a variable called showTasks
//   to toggle visibility of a <div> containing task names.
//   Show a <p> that says “No tasks found” when the tasks array
//   is empty (hint: check the array length with @if).

  toggleShowTasks() {
    this.showTasks = !this.showTasks;
  }

// 🎨 Styling with ngStyle
//   Apply [ngStyle] to a <p> so that the text colour is:
//     Green when online is true
//   Red when online is false
//   Use [ngStyle] on a <button> so the background changes
//   colour when isDarkMode is true or false.

  showOnline = true;
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}

