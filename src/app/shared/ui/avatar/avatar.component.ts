import { Component, Input } from '@angular/core';

export type AvatarSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";



@Component({
  selector: 'ui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  @Input() imageUrl: string
  @Input() size: AvatarSize = "xxs"
}
