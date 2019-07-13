import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UppdateCommentService {

  constructor(
    public http: HttpClient
  ) {
  }

  UpdateComment(comment) {

    return this.http.put('http://localhost:3000/comment/update/' + comment.id, {text:comment.text,})
  }
}
