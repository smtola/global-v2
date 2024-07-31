import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const apiUrl = 'https://vagsliwiqxyxzytwyrvt.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhZ3NsaXdpcXh5eHp5dHd5cnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MTg2MTEsImV4cCI6MjAzNzk5NDYxMX0.SMx-XxOQTqB6EohGoPF43SJfhTCf6YczqL-uEYUREE8';
export const supabase = createClient(apiUrl, apiKey)