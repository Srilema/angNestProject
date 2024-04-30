import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationUtilisateurComponent } from './location-utilisateur.component';

describe('LocationUtilisateurComponent', () => {
  let component: LocationUtilisateurComponent;
  let fixture: ComponentFixture<LocationUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationUtilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
