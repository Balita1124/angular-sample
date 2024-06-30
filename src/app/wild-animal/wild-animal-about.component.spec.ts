import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalAboutComponent } from './wild-animal-about.component';

describe('WildAnimalAboutComponent', () => {
  let component: WildAnimalAboutComponent;
  let fixture: ComponentFixture<WildAnimalAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WildAnimalAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildAnimalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
