import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Juan Pa',
    email: 'juan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Lola Ma',
    email: 'lola@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
