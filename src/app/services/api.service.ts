import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//env
import { environment } from '../../environments/environment';

@Injectable()

export class ApiServices {

    constructor(private http: HttpClient) {

    }

    getAq() {
        const url = `${environment.baseUrl}api/users?page=1`;
        return this.http.get(url);
    }
}