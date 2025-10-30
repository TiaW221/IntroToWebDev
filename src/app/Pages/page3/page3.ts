import { Component } from '@angular/core';
import {topOfPageTitle } from '../../Components/title/title';

@Component({
  selector: 'app-page3',
  imports: [
    topOfPageTitle
  ],
  templateUrl: './page3.html',
  styleUrl: './page3.scss',
})
export class Page3 {
title: string = 'Holidays';
}
