import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zsobktqfmeepxqbyikyb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzb2JrdHFmbWVlcHhxYnlpa3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MzAxNDAsImV4cCI6MjAyMjEwNjE0MH0.kJYkHwvSFFO9doUztrmHVpBmY0UHVf55WtkOlsDV8dQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
