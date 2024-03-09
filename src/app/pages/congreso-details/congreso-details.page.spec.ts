import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CongresoDetailsPage } from './congreso-details.page';

describe('CongresoDetailsPage', () => {
  let component: CongresoDetailsPage;
  let fixture: ComponentFixture<CongresoDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CongresoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
