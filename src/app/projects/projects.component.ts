import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Projet = {
    id: 1,
    name: 'Refaire Véranda'
  };
  constructor() { }
  ngOnInit(): void {
  }
}
