import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.min(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  public add(): void {
     this.contactService.add(this.contactForm.value as Contact)
  }

  public clear(): void {
    this.contactForm.reset()
  }

  public isEmpty(): boolean {
    const value = this.contactForm.value
    return !value.firstName &&
    !value.lastName &&
    !value.phoneNumber &&
    !value.email;
  }
}
