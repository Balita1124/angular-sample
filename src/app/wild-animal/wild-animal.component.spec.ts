import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalComponent } from './wild-animal.component';

describe('WildAnimalComponent', () => {
  let component: WildAnimalComponent;
  let fixture: ComponentFixture<WildAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WildAnimalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
