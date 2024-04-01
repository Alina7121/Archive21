import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   // console.log(this.route.snapshot.params['id']);
   // console.log(this.route.snapshot.params['name']);

    this.paramsSubscription = this.route.params.subscribe((params:Params)=>{
      this.user = {
        id: params.id,
        name: params.name
      }
      // using . vs  {}
     // this.user.id = params.id;
      //this.user.name = params.name;
    })
/*
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }---this is a regular way to receive something from url
    */
  }
  ngOnDestroy(){
    console.log("Unsubscribe");
    this.paramsSubscription.unsubscribe();
  }
}
