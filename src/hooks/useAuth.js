import { useState, useEffect } from 'react';

// Login is password only: the password decides which account you get, so
// each password must be unique. Students share the student password; access
// to modules is set in src/config/access.js (Foundation + Application).
const CREDENTIALS = [
  { username: 'shawaiz', password: 'naeem' },
  { username: 'student', password: 'academy' },
];

const SESSION_KEY = 'eae_session';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY);
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

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
