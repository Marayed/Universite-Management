import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from '../../services/universite.service';
import { Universite } from '../../models/universite';

@Component({
  selector: 'app-universite-update',
  templateUrl: './universite-update.component.html',
  styleUrls: ['./universite-update.component.css']
})
export class UniversiteUpdateComponent implements OnInit {
  universiteId!: number;
  universite!: Universite;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private universiteService: UniversiteService
  ) {}

  ngOnInit(): void {
    this.universiteId = Number(this.route.snapshot.paramMap.get('id'));
    this.universiteService.getUniversite(this.universiteId).subscribe(data => {
      this.universite = data;
    });
  }

  updateUniversite(): void {
    this.universiteService.updateUniversite(this.universite).subscribe(() => {
      this.router.navigate(['/universites']);
    });
  }
}
