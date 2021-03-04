import { PostService } from './../../../post.service';
import { Post } from './../../../post';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.sass']
})
export class CreatePostsComponent implements OnInit {

  public newPosts: Array<Post> = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  // Reference https://angular.io/api/forms/NgForm
  onSubmit(f:NgForm) {
   // this.newPosts = [f.value]; 
    this.newPosts.push(f.value)
    f.reset();
  }
}
