import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, finalize, of } from 'rxjs';
import { DialogService } from 'src/app/common/service/dialog.service';
import { ChatService } from 'src/app/features/chat/services/chat.service';
import { UserResponseDto } from '../../models/dto/user-response.dto';
import { User } from '../../models/user';
import { RelationService } from '../../services/relation.service';
import { UserService } from '../../services/user.service';
import { RelationDto } from './../../models/dto/relation-dto';

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
    private readonly _relationService: RelationService,
    private readonly _chatService: ChatService,
    private readonly _router: Router
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
    this._userService.currentUser.subscribe((user) => {
      this.currentUser = user;
      console.log('current user', this.currentUser);
    });
  }

  createChatAndNavigate() {
    this._chatService.createPrivateChat(this.user.email).subscribe((chat) => {
      this._router.navigate(['/my/chats/'], {
        queryParams: {
          active: chat.id,
          isEmpty: chat.messages === null || chat.messages.length === 0,
        },
      });
    });
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

  isOutgoingSubscriber = () => {
    return this.currentUser?.relations.outgoingSubscriptions.some(
      (outgoingSubscription) => outgoingSubscription.user.id === this.user.id
    );
  };

  acceptSubscription() {
    this._relationService
      .addFriendship(this.user.id, this.currentUser!.user.id)
      .subscribe(() => {
        this._userService.refreshUserState();
        this._toast.success(`Friendship with ${this.user.preferredUsername}`);
      });
  }
  subscribeUser() {
    this._relationService
      .subscribeUser(this.currentUser!.user.id, this.user.id)
      .subscribe(() => {
        this._userService.refreshUserState();
        this._toast.success(`New subscription ${this.user.preferredUsername}`);
      });
  }

  unsubscribeUser() {
    let subscription = this.getRelation(
      this.currentUser!.relations.outgoingSubscriptions
    );

    this._relationService.deleteSubscription(subscription!.id).subscribe(() => {
      this._userService.refreshUserState();
      this._toast.success(`Unsubscribed ${this.user.preferredUsername}`);
    });
  }

  deleteFromUserList() {
    this._relationService
      .deleteFriendship(
        this.getRelation(this.currentUser?.relations.friends || [])!.id,
        this.currentUser!.user.id
      )
      .subscribe(() => {
        this._userService.refreshUserState();
        this._toast.success(
          `Deleted from user list ${this.user.preferredUsername}`
        );
      });
  }
  getRelation(relations: RelationDto[]): RelationDto | undefined {
    return relations.find((relation) => relation.user.id === this.user.id);
  }
}
