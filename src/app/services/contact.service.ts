import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  collection: BehaviorSubject<Contact[]>;

  constructor() {
    this.collection =  new BehaviorSubject<Contact[]>([]);
    this.load();
  }

  private load(): void {
    const memoryData = localStorage.getItem('contactColletion');
    if (memoryData) {
      this.collection.next(JSON.parse(memoryData));
    }
  }

  private save(): void {
    localStorage.setItem('contactColletion', JSON.stringify(this.collection.value));
  }

  add(value: Contact): void {
    const list = this.collection.value;
    list.push(value)
    this.collection.next(list)
    this.save()
  }

  delete(index: number): void {
    const list = this.collection.value.filter((v, i) => {
      return i != index;
    })
    this.collection.next(list);
  }
}
