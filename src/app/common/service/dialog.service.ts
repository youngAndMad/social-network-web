import { Injectable, Inject } from '@angular/core';
import { TuiDialogService, TuiDialogContext } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private modalSubscription: Subscription;

  constructor(
    @Inject(TuiDialogService) private readonly _dialogs: TuiDialogService
  ) {}

  showDialog(
    content: PolymorpheusContent<TuiDialogContext>,
    label: string
  ): void {
    this.modalSubscription = this._dialogs
      .open(content, { label: label })
      .subscribe();
  }

  closeDialog(): void {
    this.modalSubscription.unsubscribe();
  }
}
