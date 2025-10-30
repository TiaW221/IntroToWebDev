import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-input-box',
  imports: [CommonModule],
  templateUrl: './input-box.html',
  styleUrl: './input-box.scss',
})

export class InputBox {
  @Input()
  displayInBox: string = "";
  secondDisplay: string = "";
  thirdDisplay: string = "";
  displayedValue: string = "";

  updateInput(event: Event) {
    if (this.displayInBox && this.secondDisplay && this.thirdDisplay !== "") {
      this.displayInBox = (event.target as HTMLInputElement).value;
      this.secondDisplay = (event.target as HTMLInputElement).value;
      this.thirdDisplay = (event.target as HTMLInputElement).value;
    }
  }
  showValue() {
    this.displayedValue = this.displayInBox;
    console.log(`{this.displayInBox} + {this.secondDisplay} + {this.thirdDisplay}`);


    // updateInput(event: Event) {
    //   this.displayInBox = (event.target as HTMLInputElement).value;
    // }
    //
    // showValue() {
    //   this.displayedValue = this.displayInBox;
    //   // console.log(this.displayedValue);
    //   // alert(this.displayedValue);
    // }
  }
}





