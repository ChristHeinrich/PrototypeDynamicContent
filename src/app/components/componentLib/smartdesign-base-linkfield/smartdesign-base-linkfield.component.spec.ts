import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartdesignBaseLinkfieldComponent } from './smartdesign-base-linkfield.component';

describe('SmartdesignBaseLinkfieldComponent', () => {
  let component: SmartdesignBaseLinkfieldComponent;
  let fixture: ComponentFixture<SmartdesignBaseLinkfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartdesignBaseLinkfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartdesignBaseLinkfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
