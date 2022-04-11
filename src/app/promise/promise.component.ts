import { Component, OnInit } from '@angular/core';
import { Logger } from '../services/logger.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor(private logger : Logger) { }

  ngOnInit(): void {
    this.logger.log('tested');
  }

}
