import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { 

  }
  
  getAllPosts() {
    return this.http.get<Post[]>(this.apiUrl)
  }

  createPost(payload: Post) {

  }
}
