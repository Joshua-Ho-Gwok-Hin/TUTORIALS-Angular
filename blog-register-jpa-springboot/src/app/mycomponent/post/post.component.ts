import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post={
    id: 0,
    title: '',
    image: '',
    content: '',
  }

  constructor(
    private postService: PostServiceService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.post.id= this.router.snapshot.params['id'];
    this.postService.getPost(this.post.id).subscribe({
      next:(response: any)=>{
        console.log(response);
        this.post = response;
      },
      error:(error:any)=>{
        console.log(error);
      },
    });
  }

}
