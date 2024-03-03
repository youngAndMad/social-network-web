import { Component } from '@angular/core';
import {Channel} from "../../models/channel";
import {Page} from "../../../../common/model/page";
import {ChannelService} from "../../service/channel.service";
import {ChannelType} from "../../models/enums/channel-type";

@Component({
  selector: 'sp-list-channel',
  templateUrl: './list-channel.component.html',
  styleUrls: ['./list-channel.component.scss']
})
export class ListChannelComponent {
  channelsPage: Page<Channel>;
  page = 0;
  defaultPageSize = 10;


  constructor(private readonly _channelService: ChannelService) {}

  ngOnInit(): void {
    this.refreshChannelsPage(this.page);
  }

  goToPage(page: number) {
    this.refreshChannelsPage(page);
  }

  refreshChannelsPage = (page: number) => {
    this.page = page;

    this._channelService
      .paginate(this.page, this.defaultPageSize)
      .subscribe((res) => {
        this.channelsPage = res;
      });

  };

}
