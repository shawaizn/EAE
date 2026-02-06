/*
  # Create Completions Table

  1. New Tables
    - `completions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `lesson_number` (integer, the lesson being completed)
      - `category` (text, the activity category)
      - `completed` (boolean, default false)
      - `completed_at` (timestamptz, when it was completed)
      - Unique constraint on (user_id, lesson_number, category)

  2. Security
    - Enable RLS on `completions` table
    - Authenticated users can read their own completions
    - Authenticated users can insert their own completions
    - Authenticated users can update their own completions
    - Authenticated users can delete their own completions

  3. Notes
    - Upsert uses the unique constraint on (user_id, lesson_number, category)
    - Tracks per-activity completion status for each user
*/

CREATE TABLE IF NOT EXISTS completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  lesson_number integer NOT NULL,
  category text NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE completions ADD CONSTRAINT completions_user_lesson_category_unique
  UNIQUE (user_id, lesson_number, category);

CREATE INDEX IF NOT EXISTS idx_completions_user_id ON completions(user_id);

ALTER TABLE completions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own completions"
  ON completions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own completions"
  ON completions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own completions"
  ON completions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own completions"
  ON completions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
