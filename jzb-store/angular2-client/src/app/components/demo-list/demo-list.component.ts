import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import { LoggerService } from "../../services/logger.service";
import 'rxjs/add/operator/switchMap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'directive-demo1',
  templateUrl: './demo-list.component.html',
  styleUrls: [ './demo-list.component.css'	],
})
export class DemoListComponent implements OnInit {
  useDemoListClass: boolean;
  showDemo002: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private logger: LoggerService
  ) {

  }

  toggleClass(){
    this.useDemoListClass = !this.useDemoListClass;
  }

  showHideDemo002(){
    this.showDemo002 = !this.showDemo002;
  }

  ngOnInit(): void {

  }
}
