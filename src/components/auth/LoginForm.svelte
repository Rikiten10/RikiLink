<script>
    import { supabase } from '$lib/supabase/client';
    let email = "";
    let password = "";
  
    async function handleLogin() {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert("Login failed: " + error.message);
      else window.location.href = "/profile";
    }
  </script>
  
  <form on:submit|preventDefault={handleLogin}>
    <input bind:value={email} type="email" placeholder="Email" class="input mb-2" />
    <input bind:value={password} type="password" placeholder="Password" class="input mb-4" />
    <button type="submit" class="btn-primary">Login</button>
  </form>