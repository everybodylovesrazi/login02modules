import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpwComponent } from './emailpw.component';

describe('EmailpwComponent', () => {
  let component: EmailpwComponent;
  let fixture: ComponentFixture<EmailpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
