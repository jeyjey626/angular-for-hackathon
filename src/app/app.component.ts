import { Component, OnInit } from '@angular/core';

import {DataService} from './data.service';
import {Answer} from './answer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public answers: Answer[];
  private _dataService: DataService;
  ngOnInit() {
    this._dataService
      .getAll<Answer[]>()
      .subscribe((data: Answer[]) => this.answers = data);
  }
}
