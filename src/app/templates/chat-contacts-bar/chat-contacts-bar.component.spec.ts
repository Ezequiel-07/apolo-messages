import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContactsBarComponent } from './chat-contacts-bar.component';

describe('ChatContactsBarComponent', () => {
  let component: ChatContactsBarComponent;
  let fixture: ComponentFixture<ChatContactsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatContactsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatContactsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
