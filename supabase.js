import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"

export const supabase = createClient(
  "https://sfrbglcogfyolqmczpqo.supabase.co",
  "PASTE_YOUR_FULL_KEY_HERE"
)
