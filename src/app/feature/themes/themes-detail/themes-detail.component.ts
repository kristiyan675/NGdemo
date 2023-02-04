import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-themes-detail',
  templateUrl: './themes-detail.component.html',
  styleUrls: ['./themes-detail.component.css'],
})
export class ThemesDetailComponent {
  theme: any;
  canSubscribe: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ThemeService: ThemeService,
    public userService: UserService
  ) {}

  ngOnInit() {
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    this.ThemeService.loadThemeById(themeId).subscribe((res) => {
      this.theme = res;
      this.canSubscribe = !this.theme.subscribers.includes(
        '5fa64b162183ce1728ff371d'
      );
    });
  }
  canLike(comment: any) {
    return !comment.likes.includes('5fa64b162183ce1728ff371d');
  }
}
