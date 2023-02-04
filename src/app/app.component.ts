import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  themes: any = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.themes = this.postService.getPosts(5);
    // .subscribe((res) => console.log(res));s
  }
}
