import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IFlash } from './../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash;

  @Output() onToggleCard = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard() {
    this.onToggleCard.emit(this.flash.id);
  };

  deleteFlash() {
    this.onDelete.emit(this.flash.id);
  }

  editFlash() {
    this.onEdit.emit(this.flash.id);
  };

  markCorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct'
    });
  };

  markIncorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect'
    });
  };

}
