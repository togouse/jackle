import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  totalTickets : number;
  addTicket : string;
  tickets = [];
  constructor(private _data : DataService) {   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.tickets = res);
    this.totalTickets =  this.tickets.length;
    this._data.changeGoal(this.tickets);
  }

  addNewTicket(){
    this.tickets.push(this.addTicket);
    this.addTicket = '';
    this.totalTickets =  this.tickets.length;
    this._data.changeGoal(this.tickets);
  }

  removeTicket(i){
    this.tickets.splice(i,1);
    this._data.changeGoal(this.tickets);
    this.totalTickets =  this.tickets.length;
  }


}
