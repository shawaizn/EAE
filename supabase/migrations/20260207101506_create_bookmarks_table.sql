/*
  # Create bookmarks table

  1. New Tables
    - `bookmarks`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `lesson_number` (integer, global lesson number 1-44)
      - `created_at` (timestamptz)
    - Unique constraint on (user_id, lesson_number) to prevent duplicates

  2. Security
    - Enable RLS on `bookmarks` table
    - Authenticated users can SELECT, INSERT, DELETE their own bookmarks only
*/

CREATE TABLE IF NOT EXISTS bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id),
  lesson_number integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE (user_id, lesson_number)
);

ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own bookmarks"
  ON bookmarks FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own bookmarks"
  ON bookmarks FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookmarks"
  ON bookmarks FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
