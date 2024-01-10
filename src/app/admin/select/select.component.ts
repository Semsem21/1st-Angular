import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  @Input() all: boolean = true;
  @Input() select = '';
  @Input() title: string = '';
  @Input() data: any[] = [];

  @Output() selectedValue = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  detectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
