import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'


import { Item } from './list/item/item.model'


const URL_API = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1'

@Injectable()
export class DragonsService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Item> {
        return this.http.get<Item>(`${URL_API}/dragon`)
    }

    getOne(id: string): Observable<Item> {
        return this.http.get<Item>(`${URL_API}/restaurants/${id}`)
    }
}