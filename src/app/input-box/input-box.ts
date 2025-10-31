import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-box',
  imports: [CommonModule],
  templateUrl: './input-box.html',
  styleUrl: './input-box.scss',
})

export class InputBox {
  // @Input()
  // stuff I did to link all 3 of our codes
// @Input() inputText1!: string;
// @Input() inputText2!: string;   //--- not sure which way is best
// @Input() inputText3: string ='';
  @Input() inputTextTotal: string = '';

  @Output() inputTextEvent = new EventEmitter();

  @ViewChild('inputBox1') inputBox1!: ElementRef<HTMLInputElement>;
  @ViewChild('inputBox2') inputBox2!: ElementRef<HTMLInputElement>;
  @ViewChild('inputBox3') inputBox3!: ElementRef<HTMLInputElement>;


  buttonClicked2() {
    // this.inputText1 = this.inputBox1.nativeElement.value;  --- again, not sure which way is best

    let inputBoxVar1 = this.inputBox1.nativeElement.value;
    let inputBoxVar2 = this.inputBox2.nativeElement.value;
    let inputBoxVar3 = this.inputBox3.nativeElement.value;

    this.inputTextTotal = inputBoxVar1 + " " + inputBoxVar2 + " " + inputBoxVar3;
    this.inputTextEvent.emit(this.inputTextTotal);
  }
}
