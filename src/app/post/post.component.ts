import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any = [];
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(response => {
      //console.log(response);
      this.posts = response;
    })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    this.postService.createPost(post).subscribe(response => {
      debugger;
      //console.log(response);
      post['id'] = response.id;
      this.posts.splice(0, 0, post);
    })
  }

  updatePost(post) {
    this.postService.updatePost(post)
      .subscribe(res => {
        console.log(res);
      })
  }

  deletePost(post) {
    this.postService.deletePost(post.id).subscribe(res => {
      //console.log(res);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })

  }
}
