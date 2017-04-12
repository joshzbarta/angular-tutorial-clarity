//this is basically a copy of the logger.service.ts from
// https://angular.io/resources/live-examples/cb-dependency-injection/ts/eplnkr.html

import { Injectable } from '@angular/core';

@Injectable()
export class SilentLoggerService {
  logs: string[] = [];

  logInfo(msg: any)  {  }
  logDebug(msg: any) {  }
  logError(msg: any) {  }

  private log(msg: any, isErr = false) {
    this.logs.push(msg);
    isErr ? console.error(msg) : console.log(msg);
  }
}
