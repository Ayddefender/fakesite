import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hniutlajwacxnoqblbyv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuaXV0bGFqd2FjeG5vcWJsYnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNjUyMTQsImV4cCI6MjA2ODg0MTIxNH0.YXx3ZKKHVfw2Tj2ipxrjBCDs8dPJuTEdYtWyn6GznD4'

export const supabase = createClient(supabaseUrl, supabaseKey)
