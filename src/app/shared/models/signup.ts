export class Signup {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  balance: number;

  constructor(username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: number, address: string, balance: number) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.balance = balance;
  }
}