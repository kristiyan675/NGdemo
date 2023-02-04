import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css'],
})
export class ThemeListItemComponent implements OnChanges {
  @Input() theme: any;

  canSubscribe: boolean = false;

  constructor(public userService: UserService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.canSubscribe = !this.theme.subscribers.includes(
      '5fa64b162183ce1728ff371d'
    );
  }
}
