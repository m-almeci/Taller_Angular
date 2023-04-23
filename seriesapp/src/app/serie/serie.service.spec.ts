/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerieService } from './serie.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppComponent } from '../app.component';
import { SerieComponent } from './serie.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: Serie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [SerieService],
      declarations: [AppComponent, SerieComponent]
    });
  });

  it('should ...', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});
