import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sp-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  @Output() onConfirm = new EventEmitter<void>();
  @Output() onReject = new EventEmitter<void>();

  confirm = () => this.onConfirm.next();
  reject = () => this.onReject.next();
}
