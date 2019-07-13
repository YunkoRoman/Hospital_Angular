import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteCommentService {

  constructor(
    public http: HttpClient
  ) {
  }

  DeleteComment(id) {

    return this.http.delete('http://localhost:3000/comment/delete' + id)
  }
}
