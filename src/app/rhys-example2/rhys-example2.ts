
import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {topOfPageTitle} from '../Components/title/title';
interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-rhys-example2',
  imports: [
    topOfPageTitle
  ],
  templateUrl: './rhys-example2.html',
  styleUrl: './rhys-example2.scss',
})

export class RhysExample2 implements OnInit{
  colour = 'blue';
  myLetterArray = ['a', 'b', 'c', 'd'];
  myLetterArray1 = [
    {letter: 'A', key: 0},
    {letter: 'B', key: 1},
    {letter: 'C', key: 2},
    {letter: 'D', key: 3}
  ];

  taskArray: Task [] = [
    {name: "clean house", completed: true},
    {name: "go to the gym", completed: true},
    {name: "do uni work", completed: true},
    {name: "buy milk", completed: true},
    {name: "", completed: true},
    {name: "", completed: true},
  ]
isAnyTaskComplete = !(this.taskArray.every(
  (task) => !task.completed))

  showTasks: boolean = true;

ngOnInit() {
    switch (this.colour) {
      case 'red':
        console.log('Red');
        break;
      case 'amber':
        console.log('Blue');
        break;
      case 'green':
        console.log('Green');
        break;
      default:
        console.log('Unknown colour');
    }
    for (let item of this.myLetterArray) {
      console.log(item)
    }
    console.log(true ? 'wow': 'not wow :(')
  }
}


