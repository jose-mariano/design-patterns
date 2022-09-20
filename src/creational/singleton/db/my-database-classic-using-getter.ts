import { User } from '../interfaces/user';

export class MyDatabaseClassicUsingGetter {
  private static _instance: MyDatabaseClassicUsingGetter | null = null;
  private users: User[] = [];

  private constructor() { }

  static get instance(): MyDatabaseClassicUsingGetter {
    if (MyDatabaseClassicUsingGetter._instance === null) {
      MyDatabaseClassicUsingGetter._instance = new MyDatabaseClassicUsingGetter();
    }

    return MyDatabaseClassicUsingGetter._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
