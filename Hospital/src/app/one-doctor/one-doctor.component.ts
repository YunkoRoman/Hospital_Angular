import {Component, DoCheck, OnInit} from '@angular/core';
import {Response} from "../interfaces/Response";
import {ActivatedRoute} from "@angular/router";
import {Doctors} from "../interfaces/doctors";
import {CommentsInterface} from "../interfaces/CommentsInterface"
import {OneDoctorService} from "../services/one-doctor.service";
import {AllCommentsService} from "../services/all-comments.service";
import {FormControl} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import {CreateCommentService} from "../services/create-comment.service";
import {UppdateCommentService} from "../services/uppdate-comment.service";
import {DeleteCommentService} from "../services/delete-comment.service";


@Component({
  selector: 'app-one-doctor',
  templateUrl: './one-doctor.component.html',
  styleUrls: ['./one-doctor.component.css']
})
export class OneDoctorComponent implements OnInit, DoCheck {
  allcomments:CommentsInterface[] = [];
  doctorId: number;
  doctor:Doctors;
  newComment:any =[];
  currentUserId: number;
  commentId: any;
  showCommentForEdit:any [] ;
  
  constructor(public OneDoctorService: OneDoctorService,
              public AllComentService: AllCommentsService,
              public CreateCommentService:CreateCommentService,
              public UppdateCommentService: UppdateCommentService,
              public DeleteCommentService: DeleteCommentService,
              private route: ActivatedRoute)
  
  {
    // this.route.params.subscribe(params => {
    //   this.doctorId = params.id
    // });
    // this.OneDoctorService.getDoctor(this.doctorId).subscribe((data:Response) => {
    //   this.doctor = data.msg;
    // });

    this.AllComentService.getComments(this.doctorId).subscribe((data:Response) =>{
      this.allcomments = data.msg;
    });

    const jsonStr = localStorage.getItem('user');
    const user = JSON.parse(jsonStr);
    this.currentUserId = user.id;

  }

  ngOnInit(): void {

  }

  createComment(commentForm: CommentsInterface) {
    commentForm.doctor_id = this.doctorId;
    this.CreateCommentService.CreateComment(commentForm).subscribe((data:Response) => {
      this.newComment.push(data.msg);

      });
  }

  eidtComment(editCommentForm: CommentsInterface) {
    console.log(editCommentForm.id = this.commentId);
    console.log(editCommentForm.id);
    this.UppdateCommentService.UpdateComment(editCommentForm).subscribe((data:Response) => {
      console.log(data.msg);

  })}

  OneEditComment(id: number, user_id: number) {
    console.log(this.commentId = id);

  }

  DeleteComment(id: number) {
    this.DeleteCommentService.DeleteComment(id).subscribe((data:Response)=> {
      console.log(data.msg);
    })
  }

  ngDoCheck(): void {
    this.route.params.subscribe(params => {
      this.doctorId = params.id
    });
    this.OneDoctorService.getDoctor(this.doctorId).subscribe((data:Response) => {
      this.doctor = data.msg;
    });
  }
}
