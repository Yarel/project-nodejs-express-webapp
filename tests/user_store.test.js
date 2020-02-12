const UserStore = require('../store/user');

test('Get users', () => {
  UserStore.add({
    id: 1,
    name: 'Foo',
  });
  UserStore.add({
    id: 2,
    name: 'Bar'
  });

  expect(UserStore.getUsers().length).toBe(2);
})

test('Delete users', () => {
  UserStore.add({
    id: 1,
    name: 'Foo',
  });
  UserStore.add({
    id: 2,
    name: 'Bar'
  });

  UserStore.delete(1);

  expect(UserStore.getUsers().length).toBe(1);
})
