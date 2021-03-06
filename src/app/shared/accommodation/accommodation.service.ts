import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Accommodation } from './accommodation.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  public constructor(private httpClient: HttpClient) {}

  private readonly accommodationPath: string ="hospedagem";

  public getAccommodations(): Observable<Accommodation[]> {
    return this.httpClient.get<Accommodation[]>(`${environment.API_URL}/${this.accommodationPath}`);
  }

  public getAccommodation(id: number): Observable<Accommodation> {
    return this.httpClient.get<Accommodation>(`${environment.API_URL}/${this.accommodationPath}/${id}`);
  }
}
