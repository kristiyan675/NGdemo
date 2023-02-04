import { Component, OnChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { ThemeService } from '../services/theme.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent {
  themes: any = [];
  constructor(
    private themeService: ThemeService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    try {
      this.themeService
        .getThemes()
        // .pipe(map((theme) => theme))
        .subscribe((res: any[]) => (this.themes = res));
    } catch (e) {
      console.log(e);
    }
  }
}
