import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { Logger } from '../services/logger.service';
import { PromiseService } from '../services/promise-service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  index = ['id', 'title', 'userId', 'body'];
  posts: Post[] = [];
  constructor(private logger: Logger, private promiseService: PromiseService) {
    this.promiseService.getJson().then(value => {
      this.posts = value;
    }).catch(err => {
    })
  }

  async ngOnInit(): Promise<void> {
  }

}
