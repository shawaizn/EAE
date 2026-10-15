import { useState } from 'react';

// Login is password only: the password decides which account you get, so
// each password must be unique. Students share the student password; access
// to modules is set in src/config/access.js (Foundation + Application).
const CREDENTIALS = [
  { username: 'shawaiz', password: 'naeem' },
  { username: 'student', password: 'academy' },
];

const SESSION_KEY = 'eae_session';

function readSession() {
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function useAuth() {
  // Read the saved session straight away so access checks never see a
  // signed-in user as signed out on the first render
  const [user, setUser] = useState(readSession);
  const loading = false;

  const signIn = async (password) => {
    const match = CREDENTIALS.find(c => c.password === password.trim());
    if (!match) throw new Error('Incorrect password.');
    const user = { id: match.username, username: match.username };
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    setUser(user);
    return { user };
  };

  const signOut = async () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return { user, loading, signIn, signOut };
}
