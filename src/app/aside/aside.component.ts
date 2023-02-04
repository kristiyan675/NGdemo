import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  posts: any = [];
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    try {
      this.postService
        .getPosts(5)
        .subscribe((res: any[]) => (this.posts = res));
    } catch (e) {
      console.log(e);
    }
  }
}
