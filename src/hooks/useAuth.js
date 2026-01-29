import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // TEMPORARY: Bypass authentication when Supabase is down
  const bypassAuth = import.meta.env.VITE_AUTH_BYPASS === 'true';

  useEffect(() => {
    // If bypass mode is enabled, set a mock user and skip Supabase
    if (bypassAuth) {
      setUser({
        id: 'bypass-user-id',
        email: 'bypass@local.dev',
        user_metadata: { full_name: 'Bypass User' }
      });
      setLoading(false);
      return; // Skip Supabase auth setup
    }

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
  }, [bypassAuth]);

  const signIn = async (email, password) => {
    // In bypass mode, simulate successful sign in
    if (bypassAuth) {
      return {
        user: {
          id: 'bypass-user-id',
          email: 'bypass@local.dev',
          user_metadata: { full_name: 'Bypass User' }
        }
      };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    // In bypass mode, just reload the page
    if (bypassAuth) {
      return;
    }

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return { user, loading, signIn, signOut };
}
