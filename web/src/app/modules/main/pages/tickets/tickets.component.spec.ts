import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainModule } from '../../main.module';

import { TicketsComponent } from './tickets.component';

describe('TicketsComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainModule],
      declarations: [TicketsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
