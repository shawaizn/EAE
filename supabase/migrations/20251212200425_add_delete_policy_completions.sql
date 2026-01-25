
/*
  # Add DELETE policy for completions table
  
  1. Security
    - Add policy allowing users to delete their own completions
*/

CREATE POLICY "Users can delete own completions"
  ON completions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
