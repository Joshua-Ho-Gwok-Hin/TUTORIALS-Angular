import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private httpPostString = 'http://localhost:8080/api/post';

  constructor(private http:HttpClient){}

  save(post: Post){
    return this.http.post('http://localhost:8080/api/post/create', post);
  }

  update(post: Post){
    console.log(post);
    return this.http.post('http://localhost:8080/api/post/update', post);
  }

  getPost(id: number){
    return this.http.get(`http://localhost:8080/api/post/${id}`);
  }

  delete(id: number){
    return this.http.delete(`http://localhost:8080/api/post/${id}`);
  }

  getAllPost(){
    return this.http.get('http://localhost:8080/api/post/all');
  }

   
}
