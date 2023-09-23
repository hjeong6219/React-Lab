import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lybrkcjuccvuxhejoksl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YnJrY2p1Y2N2dXhoZWpva3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODY3OTYsImV4cCI6MjAxMDk2Mjc5Nn0.t-mMm8ScgPgTzcoot8vx9332ifFQLWRMMOPjIVC5z0s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
