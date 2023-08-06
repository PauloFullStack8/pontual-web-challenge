export interface User {
  id: number
  email: string
  password: string
}

const users: User[] = [
  { id: 1, email: 'ana.malu@gmail.com', password: 'password1' },
  { id: 2, email: 'john.doe@outlook.com', password: 'password2' },
]

export const authenticateUser = (
  email: string,
  password: string,
): User | null => {
  const user = users.find((u) => u.email === email && u.password === password)
  return user || null
}
