# Apply Supabase Migrations

## Option 1: Using Supabase CLI (Recommended)
```bash
# Install Supabase CLI if you haven't
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-id

# Push migrations
supabase db push
```

## Option 2: Manual Application
1. Go to Supabase Dashboard → SQL Editor
2. Open each migration file in supabase/migrations/
3. Copy and paste the SQL into the SQL Editor
4. Run each migration in order:
   - 20260129090258_create_module_notes_table.sql
   - 20260129090426_populate_module_notes_lessons_1_7.sql
