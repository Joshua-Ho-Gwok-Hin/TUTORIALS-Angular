import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin: boolean= false;
  posts: Post[]=[];

  constructor(private authService: AuthServiceService, 
    private postService: PostServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.isAdmin= this.authService.isAdmin();
    console.log(this.isAdmin);
    this.getPosts();
  }

  getPosts(){
    this.postService.getAllPost().subscribe({
      next:(response: any)=>{
        this.posts=response;
      },
      error:(error: any)=>{
        console.log(error);
      }
    })
  }

  edit(post: Post){
    this.router.navigate(['/edit', post.id]);
  }

  delete(post: Post){
    this.postService.delete(post.id).subscribe({
      next:(response: any)=>{
        console.log(response);
        this.getPosts();
      },
    });  
  }
  
  readMore(post: Post){
    console.log(post.id);
    this.router.navigate(['/post', post.id]);
  }

}
