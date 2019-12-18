import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../../profiles.service';
import { Store } from '@ngrx/store';
import { profilesActions } from '@store/actions';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.less']
})
export class ProfilesComponent implements OnInit {
    constructor(
        private profilesService: ProfilesService
    ) {}

  ngOnInit() {
    this.store.dispatch(profileActions.initProfiles());
  }
}
