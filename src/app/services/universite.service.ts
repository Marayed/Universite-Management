import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root',
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8089/kaddem/universite';

  constructor(private http: HttpClient) {}

  getAllUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}/retrieve-all-universites`);
  }

  getUniversite(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.apiUrl}/retrieve-universite/${id}`);
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.apiUrl}/add-universite`, universite);
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/update-universite`, universite);
  }

  deleteUniversite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-universite/${id}`);
  }

  assignDepartementToUniversite(universiteId: number, departementId: number): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/affecter-universite-departement/${universiteId}/${departementId}`,
      {}
    );
  }

  getDepartementsByUniversite(idUniversite: number): Observable<Departement[]> {
    return this.http.get<Departement[]>(`${this.apiUrl}/listerDepartementsUniversite/${idUniversite}`);
  }
}
