class UserStore {

  constructor() {
    console.log('User Store constructuor');
    this.users = {};
  }

  add(user) {
    // this.users[user.id] = user;
    console.log('added');
    console.log(this.users);
    return true;
  }

  update(user) {
    this.add(user);
  }

  delete(userId) {
    if (this.users[userId]) {
      delete this.users[userId];
      return true;
    }
    return false;
  }

  getUsers() {
    const result = [];
    console.log('users:');
    console.log(this.users);
    Object.keys(this.users).forEach(key => {
      console.log(`Adding ${key}`);
      result.push(this.users[key]);
    });
    return result;
  }

  getUserById(userId) {
    this.users[userId];
  }
}


const userStore = new UserStore();


module.exports = userStore;
