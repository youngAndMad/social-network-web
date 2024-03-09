import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { TuiFileLike } from '@taiga-ui/kit';

@Component({
  selector: 'sp-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ],
})
export class FileInputComponent implements ControlValueAccessor {
  @Input() multiple: boolean = false;
  @Input() required: boolean = false;
  @Input() accept: string = 'image/**';

  rejectedFiles: readonly TuiFileLike[] = [];
  fileControl: FormControl = new FormControl();

  writeValue(obj: any): void {
    console.log('write value ', obj);
  }

  registerOnChange(fn: any): void {
    console.log('write registerOnChange', fn);
  }

  registerOnTouched(fn: any): void {}

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.fileControl?.setValue(
      this.fileControl.value?.filter(
        (current: File) => current.name !== name
      ) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }
}
