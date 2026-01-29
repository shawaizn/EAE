/*
  # Create Module Notes Table

  1. New Tables
    - `module_notes` - Stores comprehensive revision notes for each module
      - `id` (uuid, primary key)
      - `module_id` (integer, unique, references module number 1-7)
      - `title` (text, module title)
      - `sections` (jsonb, structured sections with content)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `module_notes` table
    - Add policy for authenticated users to read all notes
    - Data is public/read-only for students

  3. Purpose
    - Centralized storage for all lesson revision notes
    - Token-efficient: data stored in database, not hardcoded in JS
    - Flexible: easily update content without redeploying
    - Sustainable: supports markdown/HTML formatting
*/

CREATE TABLE IF NOT EXISTS module_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id integer UNIQUE NOT NULL,
  title text NOT NULL,
  sections jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_module_notes_module_id ON module_notes(module_id);

ALTER TABLE module_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read module notes"
  ON module_notes
  FOR SELECT
  USING (true);
