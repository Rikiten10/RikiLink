<script>
    import { supabase } from '$lib/supabase/client';
    let name = "";
    let email = "";
    let phone = "";
    let category = "";
  
    async function registerUser() {
      // 1. Create user in auth table
      const { user, error: authError } = await supabase.auth.admin.createUser({
        email,
        password: "temporary-password", // Send reset email
      });
  
      if (authError) {
        alert("Registration failed: " + authError.message);
        return;
      }
  
      // 2. Add to professionals table
      const { error: dbError } = await supabase
        .from('professionals')
        .insert([{ 
          user_id: user.id, 
          name, 
          email, 
          phone, 
          category,
          subscription_status: 'subscribed' 
        }]);
  
      if (dbError) alert("Database error: " + dbError.message);
      else alert("User registered successfully!");
    }
  </script>
  
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Admin User Registration</h2>
    <form on:submit|preventDefault={registerUser}>
      <input bind:value={name} placeholder="Name" class="input mb-2" />
      <input bind:value={email} type="email" placeholder="Email" class="input mb-2" />
      <input bind:value={phone} placeholder="Phone" class="input mb-2" />
      <select bind:value={category} class="input mb-4">
        <option value="" disabled>Select Category</option>
        {#each categories as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </select>
      <button type="submit" class="btn-primary">Register User</button>
    </form>
  </div>