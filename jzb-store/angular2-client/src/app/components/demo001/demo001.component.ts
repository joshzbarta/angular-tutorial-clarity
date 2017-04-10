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
  templateUrl: './demo001.component.html',
  styleUrls: [ './demo001.component.css', '../../../directives/spinny/spinny.directive.css'	],

})
export class Demo001Component implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private logger: LoggerService
  ) {

  }

  ngOnInit(): void {

  }
}
