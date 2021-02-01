import { Component, OnInit } from '@angular/core';
import {DataServices}  from '../../app.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataPerson:Array<any> = []
  public dataPersonTeam:Array<any> = [];

  constructor(  private _dataServices:DataServices) { 

    this._dataServices.getData().subscribe((res:any) =>  {
        
        //console.log(res);
        this.dataPerson = res.data;
        this.dataPersonTeam =  res.data[0];

        /*console.log(res);*/

      }
  
      )
 
  }

  ngOnInit(): void {
  }

}
