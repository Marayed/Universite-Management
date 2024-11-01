import { Component } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
import { Universite } from '../../models/universite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universite-add',
  templateUrl: './universite-add.component.html',
})
export class UniversiteAddComponent {
  universite: Universite = { idUniv: 0, nomUniv: '' };

  constructor(private universiteService: UniversiteService, private router: Router) {}

  addUniversite(): void {
    this.universiteService.addUniversite(this.universite).subscribe(() => {
      this.router.navigate(['/universites']);
    });
  }
}
