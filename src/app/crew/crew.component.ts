import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

    crew: object[] = [];
    selected: any = false; // newer version wouldn't compile without this

    candidates: object[] = [
        {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
        {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
        {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
        {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
        {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
        {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
        {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
    ];
    
    constructor() { }

    ngOnInit(): void {
    }

    moveCrewMember(member): any {
        if (!this.crew.includes(member) && this.crew.length < 3) {
            this.crew.push(member);
        } else if (this.crew.includes(member)) {
            this.crew.splice(this.crew.indexOf(member),1);
        } else {
            alert("Crew complement at maximum");
        }
    }

}
