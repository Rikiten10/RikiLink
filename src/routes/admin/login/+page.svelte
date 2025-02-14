<script>
    import { supabase } from '$lib/supabase';
  
    let email = "";
    let password = "";
  
    async function login() {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert("Login failed.");
      else window.location.href = "/admin/suggestions";
    }
  </script>
  
  <div class="admin-login">
    <h1 class="text-2xl font-bold mb-6">Admin Login</h1>
    <input bind:value={email} placeholder="Email" class="input mb-2" />
    <input bind:value={password} type="password" placeholder="Password" class="input mb-4" />
    <button on:click={login} class="btn-primary">Login</button>
  </div>