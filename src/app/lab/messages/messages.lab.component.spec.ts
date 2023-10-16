
// describe("2-message component integration testing:", () => {

//     it("expect comp. created successfully", () => { })
//     it("expect component template to be empty", () => {
//         //Note: there is *ngIf="messageService.messages.length" in line 1 in template
//     })
//     it("then expect div.msg to have the messages after setting it", () => {})
// })

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component'; // Adjust the path
import { MessageService } from '../../services/message/message.service'

describe("2-message component integration testing:", () => {
  let component: MessagesComponentForLab;
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [MessageService]
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it("expect comp. created successfully", () => {
    expect(component).toBeTruthy();
  });

  it("expect component template to be empty", () => {
    const container = fixture.nativeElement.querySelector('#container');
    expect(container).toBeNull();
  });

  it("then expect div.msg to have the messages after setting it", () => {
    const messages = ['Message 1', 'Message 2', 'Message 3'];
    messageService.messages = messages;
    fixture.detectChanges();

    const messageDivs = fixture.nativeElement.querySelectorAll('.msg');
    expect(messageDivs.length).toBe(messages.length);

    for (let i = 0; i < messages.length; i++) {
      expect(messageDivs[i].textContent).toContain(messages[i]);
    }
  });
});





