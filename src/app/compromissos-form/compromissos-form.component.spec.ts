import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromissosFormComponent } from './compromissos-form.component';

describe('CompromissosFormComponent', () => {
  let component: CompromissosFormComponent;
  let fixture: ComponentFixture<CompromissosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompromissosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompromissosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
