import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  details = [] as any;
  constructor(private router:Router,
              public state: StateService) { }

  ngOnInit(): void {
    // this.details = localStorage.getItem()
  }
  logout(){
    // localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
