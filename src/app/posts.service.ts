import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.httpClient.get<Array<Post>>(this.postsUrl);
  }
}
