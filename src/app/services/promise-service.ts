import { Injectable } from "@angular/core";
import { Post } from "../interfaces/post";
import { HttpWrapperService } from "./http-wrapper-service";
import { Logger } from "./logger.service";

@Injectable()
export class PromiseService {
    constructor(private httpService:HttpWrapperService) {
    }

    async getJson(): Promise<Post[]> {
        return this.httpService.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    }
}