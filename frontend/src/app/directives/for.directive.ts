import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') number : number[]
  @Input('myForUsando') text : String

  constructor() { }

  ngOnInit(): void{
    console.log(this.number, this.text)
  }

}
