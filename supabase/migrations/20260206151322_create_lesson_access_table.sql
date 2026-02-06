/*
  # Create Lesson Access Table

  1. New Tables
    - `lesson_access`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `lesson_number` (integer, the lesson number)
      - `unlocked` (boolean, default false, whether user can access the lesson)
      - `created_at` (timestamptz, auto-set)
      - Unique constraint on (user_id, lesson_number)

  2. Security
    - Enable RLS on `lesson_access` table
    - Authenticated users can read their own lesson access records
    - Only service role / admin can insert/update lesson access

  3. Notes
    - Controls which lessons each user can access
    - Managed by admin/service role, read-only for users
*/

CREATE TABLE IF NOT EXISTS lesson_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  lesson_number integer NOT NULL,
  unlocked boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE lesson_access ADD CONSTRAINT lesson_access_user_lesson_unique
  UNIQUE (user_id, lesson_number);

CREATE INDEX IF NOT EXISTS idx_lesson_access_user_id ON lesson_access(user_id);

ALTER TABLE lesson_access ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own lesson access"
  ON lesson_access
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
