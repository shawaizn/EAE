/*
  # Create prompts table (Prompt Vault)

  1. New Tables
    - `prompts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `category` (text, checked: productivity, writing, analysis, creative, custom)
      - `title` (text, short name for the prompt)
      - `content` (text, the full prompt body)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `prompts` table
    - Authenticated users can CRUD their own prompts only
*/

CREATE TABLE IF NOT EXISTS prompts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id),
  category text NOT NULL CHECK (category IN ('productivity', 'writing', 'analysis', 'creative', 'custom')),
  title text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own prompts"
  ON prompts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own prompts"
  ON prompts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own prompts"
  ON prompts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own prompts"
  ON prompts FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
