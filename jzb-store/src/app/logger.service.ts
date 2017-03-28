//this is basically a copy of the logger.service.ts from
// https://angular.io/resources/live-examples/cb-dependency-injection/ts/eplnkr.html

import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];

  logInfo(msg: any)  { this.log(`INFO: ${msg}`); }
  logDebug(msg: any) { this.log(`DEBUG: ${msg}`); }
  logError(msg: any) { this.log(`ERROR: ${msg}`, true); }

  private log(msg: any, isErr = false) {
    this.logs.push(msg);
    isErr ? console.error(msg) : console.log(msg);
  }
}
