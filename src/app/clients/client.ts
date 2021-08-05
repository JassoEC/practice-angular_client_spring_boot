export class Client {
  id: number;
  name: string;
  lastName: string;
  email: string;
  createdAt: string;

  constructor(
    id: number = 0,
    name: string = '',
    lasName: string = '',
    email: string = '',
    createdAt: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lasName;
    this.email = email;
    this.createdAt = createdAt;
  }
}
