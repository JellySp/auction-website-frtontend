export class Signup {
  private username: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: number;
  private address: string;
  constructor(username: string, password: string, firstName: string, lastName: string, email: string, phoneNumber: number, address: string) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}
