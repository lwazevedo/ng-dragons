import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'


import { List } from './list/list.model'


const URL_API = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1'

@Injectable()
export class DragonsService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<List> {
        return this.http.get<List>(`${URL_API}/dragon`)
    }

    save(dragon: List): Observable<List> {
        return this.http.post<List>(`${URL_API}/dragon`, dragon)
    }

    update(id: string, dragon: List): Observable<List> {
        return this.http.put<List>(`${URL_API}/dragon/${id}`, dragon)
    }

    getOne(id: string): Observable<List> {
        return this.http.get<List>(`${URL_API}/dragon/${id}`)
    }

    delete(id: string): Observable<List> {
        return this.http.delete<List>(`${URL_API}/dragon/${id}`)
    }
}