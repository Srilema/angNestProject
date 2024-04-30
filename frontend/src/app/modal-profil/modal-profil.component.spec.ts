import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfilComponent } from './modal-profil.component';

describe('ModalProfilComponent', () => {
  let component: ModalProfilComponent;
  let fixture: ComponentFixture<ModalProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
