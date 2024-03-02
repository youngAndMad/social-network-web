import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { catchError, finalize, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserResponseDto } from '../../models/dto/user-response.dto';
import { DialogService } from 'src/app/common/service/dialog.service';
import { RelationService } from '../../services/relation.service';

@Component({
  selector: 'sp-visit-profile',
  templateUrl: './visit-profile.component.html',
  styleUrls: ['./visit-profile.component.scss'],
})
export class VisitProfileComponent implements OnInit {
  user: User;
  currentUser: UserResponseDto | null;
  loading: boolean = true;

  constructor(
    private readonly _activateRoute: ActivatedRoute,
    private readonly _userService: UserService,
    private readonly _toast: ToastrService,
    public readonly dialogService: DialogService,
    private readonly _relationService: RelationService
  ) {}

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this._userService
        .getUser(id)
        .pipe(
          catchError(({ message }) => {
            this._toast.error(message);
            setTimeout(() => {
              window.history.back();
            }, 1000);
            return of();
          }),
          finalize(() => (this.loading = false))
        )
        .subscribe((user) => {
          this.user = user;
          console.log('user', this.user);
        });
    });

    this.currentUser = JSON.parse(localStorage.getItem('user-response')!);
    console.log('current ', this.currentUser);
  }

  isFriend = () =>
    this.currentUser?.relations.friends.some(
      (friend) => friend.user.id === this.user.id
    );

  isBlocked = () =>
    this.currentUser?.relations.blocks.some(
      (block) => block.user.id === this.user.id
    );

  isIncomingSubscriber = () =>
    this.currentUser?.relations.incomingSubscriptions.some(
      (incomingSubscription) => incomingSubscription.user.id === this.user.id
    );

  isOutgoingSubscriber = () =>
    this.currentUser?.relations.outgoingSubscriptions.some(
      (outgoingSubscription) => outgoingSubscription.user.id === this.user.id
    );

  acceptSubscription() {
    console.log('acceptSubscription');
  }
  sendFriendRequest() {
    this._relationService
      .sendFriendRequest(this.currentUser!.user.id, this.user.id)
      .subscribe();
    console.log('sendFriendRequest');
  }
}
