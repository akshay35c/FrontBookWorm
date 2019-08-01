import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiobookComponent } from './audiobook.component';

describe('AudiobookComponent', () => {
  let component: AudiobookComponent;
  let fixture: ComponentFixture<AudiobookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiobookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
