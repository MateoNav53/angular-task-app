import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //the constructor runs whenever a component is initialized
  title: string = 'Task App';
  constructor() { }
  //lifecycle method. use ngOnInit whenever the component loads
  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('toggle')
  }

}
