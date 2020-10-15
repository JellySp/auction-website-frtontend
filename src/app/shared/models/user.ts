export class User{
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;

  constructor(id: number, username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: number, address: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}

