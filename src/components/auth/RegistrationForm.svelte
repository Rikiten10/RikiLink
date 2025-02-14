<script>
    import { supabase } from '$lib/supabase/client';
    let email = "";
    let password = "";
  
    async function handleRegister() {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) alert("Registration failed: " + error.message);
      else alert("Check your email for a confirmation link!");
    }
  </script>
  
  <form on:submit|preventDefault={handleRegister}>
    <input bind:value={email} type="email" placeholder="Email" class="input mb-2" />
    <input bind:value={password} type="password" placeholder="Password" class="input mb-4" />
    <button type="submit" class="btn-primary">Register</button>
  </form>