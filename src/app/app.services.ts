import {Injectable } from '@angular/core'
import { HttpClient,HttpHeaders}  from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable()

export class DataServices {

    _urlService = 'https://www.balldontlie.io/api/v1/players';

    constructor ( private http:HttpClient ) {

    }

    getData() {

        let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')

        return this.http.get(this._urlService ,{

           headers:header

        });

    }

    getPlayer (){

        

    }


}