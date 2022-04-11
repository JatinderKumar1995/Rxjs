import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpWrapperService {
    constructor(private httpClient: HttpClient) { }

    get<T>(url: string): Promise<T> {
        return this.httpClient.get<T>(url).toPromise();
    }
}