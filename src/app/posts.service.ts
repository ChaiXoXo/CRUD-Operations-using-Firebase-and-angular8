import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private Url_EndPoint = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) { 

  }

  getPost(){
    return this.http.get(this.Url_EndPoint);   
  }

  createPost(post) : Observable<any>{
    return this.http.post(this.Url_EndPoint, JSON.stringify(post));
  }

  updatePost(post){
    return this.http.put(this.Url_EndPoint, JSON.stringify(post));
  }

  deletePost(id){
    return this.http.delete(this.Url_EndPoint + '/' + id);
  }
}
