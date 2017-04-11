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
  selector: 'demo002',
  templateUrl: './demo002.component.html',
  styleUrls: [ './demo002.component.css' ]

})
export class Demo002Component implements OnInit {
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
