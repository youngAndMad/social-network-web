import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Page} from "../../../../common/model/page";
import {Channel} from "../../models/channel";
import {NewsService} from "../../../news/services/news.service";
import {ChannelService} from "../../service/channel.service";
import {NgForOf} from "@angular/common";
import {TuiPaginationModule} from "@taiga-ui/kit";

@Component({
  selector: 'sp-channel-list',
  templateUrl: './channel-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    TuiPaginationModule
  ],
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit{
  length = 0;
  channelPage: Page<Channel>;
  page = 0;
  defaultPageSize = 5;

  constructor(
    private readonly _channelService: ChannelService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.refreshChannelPage(this.page);
  }

  refreshChannelPage = (page: number) => {
    this.page = page;
    this._channelService
      .paginate(this.page, this.defaultPageSize)
      .subscribe((res) => {
        this.channelPage = res;
        this.length = res.totalPages;
        this._cdr.detectChanges();
      });
  };
}
