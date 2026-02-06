import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyMaster } from './party-master';

describe('PartyMaster', () => {
  let component: PartyMaster;
  let fixture: ComponentFixture<PartyMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
