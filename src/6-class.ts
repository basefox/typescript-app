
/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
// Object Literal vs Object Instance

abstract class Root {
  abstract done: boolean;
}

class User extends Root {
  // access modifiers : public, private, protected
  // properties
  id: number;
  firstName: string;
  lastName: string;
  protected save: boolean;
  private token: string;
  static MAX_FAILED_LOGIN = 2;
  private retryLogin = 0;
  done: boolean;

  // method
  login(userName: string, password: string): boolean | string {
    this.retryLogin += 1;
    if (userName === 'admin' && password === 'admin') {
      return true;
    }
    if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
      return 'max login attempted';
    }
    return false;
  }

  register() { }

  constructor(id: number, firstName: string, lastName: string) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.save = false;
    this.token = '';
    this.done = false;
  }
}

User.MAX_FAILED_LOGIN = 3;
let myUser = new User(1, 'john', 'dodo');
console.log(User.MAX_FAILED_LOGIN);
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
// myUser.

class EnhancementUser extends User {
  location: string;
  constructor(
    location: string,
    id: number,
    firstName: string,
    lastName: string,
  ) {
    super(id, firstName, lastName);
    this.location = location;
    this.save;
  }
}

let myNewUser = new EnhancementUser('medan', 2, 'ucok', 'cool');