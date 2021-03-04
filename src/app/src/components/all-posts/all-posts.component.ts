import { PostService } from './../../../post.service';
import { Post } from './../../../post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.sass']
})
export class AllPostsComponent implements OnInit {

  public allPosts: Array<Post> = [
    
  ];
  

  constructor(private postService: PostService) { }

  ngOnInit(){
    return this.postService.getAllPosts()
    .subscribe(data => this.allPosts = data)
  }

}
