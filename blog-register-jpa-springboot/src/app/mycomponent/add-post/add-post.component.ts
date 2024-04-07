import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post ={
    id: 0,
    title: '',
    image: '',
    content: '',
  };

  constructor(
    private postService: PostServiceService,
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.post.id= this.rout.snapshot.params['id'];
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
  
  addpost(){
    console.log(this.post.id);
    if(this.post.id===0){
      console.log("post.id===0")
      this.postService.save(this.post).subscribe({
        next: (response: any)=>{
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error: any)=>{
          console.log(error);
        },
      });
    }
    else{
      this.postService.update(this.post).subscribe({
        next: (response: any)=>{
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error: any)=>{
          console.log(error);
        },
      });
    }
  }
}
