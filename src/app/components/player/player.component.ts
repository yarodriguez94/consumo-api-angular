import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute) { 

  this.activatedRoute.params.subscribe( params => {

    console.log(params);

  })

}

  ngOnInit(): void {
  }

}
