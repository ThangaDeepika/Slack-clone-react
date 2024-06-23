// src/services/authService.js

const users = [];

export const registerUser = (email, password) => {
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    throw new Error('User already exists');
  }
  users.push({ email, password });
  return { email };
};

export const loginUser = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    throw new Error('Invalid email or password');
  }
  return { email };
};
