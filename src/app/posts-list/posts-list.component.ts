import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/model/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Array<Post>>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getPosts();
   }

  ngOnInit() {
  }

}
