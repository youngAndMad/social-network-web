import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sp-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  @Output() onConfirm = new EventEmitter<void>();
  @Output() onReject = new EventEmitter<void>();
  @Output() finally = new EventEmitter<void>();

  confirm = () => {
    this.onConfirm.emit();
    this.finally.emit();
  };
  reject = () => {
    this.onReject.next();
    this.finally.emit();
  };
}
