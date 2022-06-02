import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import * as LDClient from 'launchdarkly-js-client-sdk';

export type FlagNames = 'test-ss-page';

@Injectable()
export class LaunchDarklyService {
  private ldClient: any;
  private flags: any;
  flagChange: Subject<any> = new Subject<any>();

  constructor() {
    this.flags = {};

    this.ldClient = LDClient.initialize('6292d45ae11a2e14fd1afaae', {
      key: 'ss-test-project',
      anonymous: true,
    });

    // Called when the flags changed in the LaunchDarkly platform
    this.ldClient.on('change', (flags: any) => {
      // iterate through all flags that have been updated
      for (let flag in flags) {
        // take the current value of the flag
        this.flags[flag] = flags[flag].current;
      }

      // Update any subscribers to the flagChanged topic
      this.flagChange.next(this.flags);
      console.log('Flags updated.');
    });

    // Set all the flag values when the client initializes
    this.ldClient.on('ready', () => {
      this.setFlags();
    });
  }

  /*
      Requires a FlagName type be passed in. Defaults to False (i.e. disabled)
      if the FlagName does not exist in LaunchDarkly, and warns about it.
    */
  getFlag(flagName: FlagNames): boolean {
    let flag = this.flags[flagName];
    if (flag == undefined) {
      console.log(
        'FIXME: Flag ' + flagName + ' queried but not found in LaunchDarkly!'
      );
      this.flags[flagName] = false;
      flag = false;
    }
    console.log('****' + flag);
    return flag;
  }

  setFlags() {
    this.flags = this.ldClient.allFlags();

    // Notify the subscribers just in case someone is watching this
    // before setup completes.  Shouldn't be, but you never know...
    this.flagChange.next(this.flags);

    console.log('Flags initialized.');
  }
}
