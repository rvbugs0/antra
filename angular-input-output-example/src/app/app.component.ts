import { Component } from '@angular/core';
import { posts } from './data/post-data';
import { Post } from './interface/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'changeColor';
  posts: Post[] = posts;
  clickedPostId: number | null = null;
  currColor: string = 'black';

  clickedPost(event: { id: number; color: string }) {
    this.clickedPostId = event.id;
    this.currColor = event.color;
  }
}