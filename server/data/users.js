import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Administrator',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
