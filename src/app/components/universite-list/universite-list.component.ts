import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversiteService } from '../../services/universite.service';
import { Universite } from '../../models/universite';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
})
export class UniversiteListComponent implements OnInit {
  universites: Universite[] = [];

  constructor(private universiteService: UniversiteService, private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUniversites();
  }

  loadUniversites(): void {
    this.universiteService.getAllUniversites().subscribe((data) => {
      this.universites = data;
    });
  }

  deleteUniversite(id: number): void {
    this.universiteService.deleteUniversite(id).subscribe(() => this.loadUniversites());
  }

  editUniversite(id: number): void {
    this.router.navigate(['/universites/update', id]);
  }
  
}
