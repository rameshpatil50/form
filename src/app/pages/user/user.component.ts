import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = [] as any;

  constructor(private route: ActivatedRoute,
              public state: StateService) { }

  ngOnInit(): void {
    //get the user id from the url
    this.route.params.subscribe(params => {
    console.log(params['user']);
    this.state.username = params['user'];
    });
    this.user = JSON.parse(localStorage.getItem(this.state.username) || '');
    console.log(typeof this.user);
    console.log(this.user.firstname);
  }
}
