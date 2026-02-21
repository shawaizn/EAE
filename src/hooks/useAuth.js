import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      (async () => {
        setUser(session?.user ?? null);
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (username, password) => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // Check for hardcoded test credentials
    if (trimmedUsername === 'shawaiz' && trimmedPassword === 'naeem') {
      const testUser = {
        id: 'test-user-001',
        email: 'shawaiz@test.local',
        user_metadata: {
          username: 'shawaiz'
        }
      };
      setUser(testUser);
      return { user: testUser };
    }

    // Otherwise, try Supabase authentication (if email format is provided)
    if (trimmedUsername.includes('@')) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: trimmedUsername,
        password: trimmedPassword
      });

      if (error) throw error;
      return data;
    }

    throw new Error('Invalid credentials. Please check your username and password.');
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return { user, loading, signIn, signOut };
}
