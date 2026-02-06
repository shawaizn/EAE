/*
  # Recreate Module Notes Table

  1. New Tables
    - `module_notes`
      - `id` (uuid, primary key)
      - `module_id` (integer, unique, module number 1-7)
      - `title` (text, module title)
      - `sections` (jsonb, structured content sections)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `module_notes` table
    - Authenticated users can read all module notes (read-only reference material)

  3. Notes
    - Previously dropped, now recreated for recap/revision pages
    - Content is reference material, not user-owned data
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

CREATE POLICY "Authenticated users can read module notes"
  ON module_notes
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);
