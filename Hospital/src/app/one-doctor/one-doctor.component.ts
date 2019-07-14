import {Component, DoCheck, OnInit} from '@angular/core';
import {Response} from "../interfaces/Response";
import {ActivatedRoute} from "@angular/router";
import {Doctors} from "../interfaces/doctors";
import {CommentsInterface} from "../interfaces/CommentsInterface"
import {OneDoctorService} from "../services/one-doctor.service";
import {AllCommentsService} from "../services/all-comments.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
  loading : false;
  createComment: FormGroup;
  wiev: boolean;
  showCommentForEdit:any [] ;

  constructor(public OneDoctorService: OneDoctorService,
              public AllComentService: AllCommentsService,
              public CreateCommentService:CreateCommentService,
              public UppdateCommentService: UppdateCommentService,
              public DeleteCommentService: DeleteCommentService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              )
  
  {
    this.route.params.subscribe(params => {
      this.doctorId = params.id
    });
    // this.OneDoctorService.getDoctor(this.doctorId).subscribe((data:Response) => {
    //   this.doctor = data.msg;
    // });

    this.AllComentService.getComments(this.doctorId).subscribe((data:Response) =>{
      console.log(this.allcomments = data.msg);
    });
    this.wiev = true;
    if (localStorage.getItem('user')) {
    const jsonStr = localStorage.getItem('user');
    const user = JSON.parse(jsonStr);
    this.currentUserId = user.id;
    if (this.currentUserId != undefined) this.wiev = false;
  }
  }

  ngOnInit(): void {
    this.createComment = this.formBuilder.group({
      text: ['', Validators.required],

    });
  }
  get f() { return this.createComment.controls; }
  SendComment(){
    const text = this.f.text.value;
    const id = this.doctorId;
    console.log(id);
    this.CreateCommentService.CreateComment(text, id ).subscribe((data:Response) => {
      console.log(data.msg);
      this.newComment.push(data.msg);

     })
  }

  // eidtComment(editCommentForm: CommentsInterface) {
  //   console.log(editCommentForm.id = this.commentId);
  //   console.log(editCommentForm.id);
  //   this.UppdateCommentService.UpdateComment(editCommentForm).subscribe((data:Response) => {
  //     console.log(data.msg);
  //
  // })}
  //
  // OneEditComment(id: number, user_id: number) {
  //   console.log(this.commentId = id);
  //
  // }
  //
  // DeleteComment(id: number) {
  //   this.DeleteCommentService.DeleteComment(id).subscribe((data:Response)=> {
  //     console.log(data.msg);
  //   })
  // }

  ngDoCheck(): void {
    this.route.params.subscribe(params => {
      this.doctorId = params.id
    });
    this.OneDoctorService.getDoctor(this.doctorId).subscribe((data:Response) => {
      this.doctor = data.msg;
    });
  }
}
