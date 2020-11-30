import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../list-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project = {
    id: 1,
    name: 'Refaire Véranda'
  };
  projects = PROJECTS;
  selectedProject: Project;

  onSelect(project: Project): void {
    this.selectedProject = project;
}

  constructor() { }

  ngOnInit(): void {
  }
}
