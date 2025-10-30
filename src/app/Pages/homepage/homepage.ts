import {Component, input, Input} from '@angular/core';
import {topOfPageTitle} from '../../Components/title/title';
import {Button} from '../../button/button';
import {InputBox} from '../../input-box/input-box';
@Component({
  selector: 'app-homepage',
  imports: [
    topOfPageTitle, Button, InputBox
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})

export class Homepage {
  Log(eventText: string) {
    console.log(eventText);
  }

}
