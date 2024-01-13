import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QrService } from '../../services/qr.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {
  
  @Input('url') url: string
  qrCodeUrl: string
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(
    private qrService: QrService
  ) {
  }

  ngOnInit() {
    this.qrService.generateQr(this.url)
      .subscribe(res => {
        this.qrCodeUrl = URL.createObjectURL(res)
      });
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
