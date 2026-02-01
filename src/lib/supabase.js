import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const bypassAuth = import.meta.env.VITE_AUTH_BYPASS === 'true';

// Create mock client object
const createMockSupabaseClient = (showError = false) => ({
  auth: {
    getSession: async () => ({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithPassword: async () => ({
      data: null,
      error: showError ? new Error('Supabase not configured') : null
    }),
    signOut: async () => ({ error: null }),
  },
  from: () => ({
    select: () => ({ data: [], error: showError ? new Error('Supabase not configured') : null }),
    insert: () => ({ data: null, error: showError ? new Error('Supabase not configured') : null }),
    update: () => ({ data: null, error: showError ? new Error('Supabase not configured') : null }),
    delete: () => ({ data: null, error: showError ? new Error('Supabase not configured') : null }),
  }),
});

// Initialize Supabase client
let supabaseClient;

if (!supabaseUrl || !supabaseAnonKey) {
  if (bypassAuth) {
    console.warn('Running in auth bypass mode - Supabase client is mocked');
    supabaseClient = createMockSupabaseClient(false);
  } else {
    console.error('Missing Supabase environment variables. Set VITE_AUTH_BYPASS=true to bypass authentication.');
    supabaseClient = createMockSupabaseClient(true);
  }
} else {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseClient;
