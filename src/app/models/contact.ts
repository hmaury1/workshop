export interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  status: ContactStatus
}

export enum ContactStatus {
  Active,
  Inactive,
  Blocked
}
