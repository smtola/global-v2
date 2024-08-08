import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const apiUrl = 'https://vagsliwiqxyxzytwyrvt.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhZ3NsaXdpcXh5eHp5dHd5cnZ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjQxODYxMSwiZXhwIjoyMDM3OTk0NjExfQ.t2-y6yn5vkXW2Zlee_rqjwwrhsKHg3H5hbJBXE8Bnao';
export const supabase = createClient(apiUrl, apiKey,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
          }
    }
)

