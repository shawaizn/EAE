/*
  # Update completions table lesson constraint

  1. Changes
    - Update lesson_number constraint from max 35 to max 44 to support all 44 lessons
*/

ALTER TABLE completions DROP CONSTRAINT completions_lesson_number_check;

ALTER TABLE completions ADD CONSTRAINT completions_lesson_number_check CHECK (lesson_number >= 1 AND lesson_number <= 44);
