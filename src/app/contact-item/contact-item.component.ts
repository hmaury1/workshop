import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() data: Contact | undefined;
  @Input() index: number = 0;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.contactService.delete(this.index)
  }

}
