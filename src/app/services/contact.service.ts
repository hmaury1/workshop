import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Contact, ContactStatus } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  collection: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([
    { firstName: 'Humberto', lastName: 'Maury', phoneNumber: 123456789, email: 'hmaury1@gmail.com', status: ContactStatus.Active },
    { firstName: 'Humberto', lastName: 'Maury', phoneNumber: 123456789, email: 'hmaury1@gmail.com', status: ContactStatus.Active },
    { firstName: 'Humberto', lastName: 'Maury', phoneNumber: 123456789, email: 'hmaury1@gmail.com', status: ContactStatus.Active },
    { firstName: 'Humberto', lastName: 'Maury', phoneNumber: 123456789, email: 'hmaury1@gmail.com', status: ContactStatus.Active }
  ]);

  constructor() { }

  add(value: Contact): void {
    const list = this.collection.value;
    list.push(value)
    this.collection.next(list)
  }

  delete(index: number): void {
    const list = this.collection.value.filter((v, i) => {
      return i != index;
    })
    this.collection.next(list);
  }
}
