<script>
  import { supabase } from '$lib/supabase/client';
  import { goto } from '$app/navigation';

  let name = "";
  let email = "";
  let phone = "";
  let category = "";

  const categories = [
    "Hair Stylist",
    "Makeup Artist",
    "Nail Technician",
    "Fashion Designer",
    "House Cleaner",
    "Laundry Service",
    "Market Shopper",
    "Cook (Home or Away)",
    "Thrift Vendor",
    "Accessories Vendor",
    "Event Planner"
  ];

  async function handleRegister() {
    const { error } = await supabase
      .from('professionals')
      .insert([{ name, email, phone, category }]);

    if (error) alert("Registration failed: " + error.message);
    else goto('/payment');
  }
</script>

<div class="max-w-md mx-auto p-6">
  <h2 class="text-2xl font-bold mb-4">Professional Registration</h2>
  <form on:submit|preventDefault={handleRegister}>
    <input bind:value={name} placeholder="Name" class="input mb-2" />
    <input bind:value={email} type="email" placeholder="Email" class="input mb-2" />
    <input bind:value={phone} placeholder="Phone" class="input mb-2" />
    <select bind:value={category} class="input mb-4">
      <option value="" disabled>Select Category</option>
      {#each categories as cat}
        <option value={cat}>{cat}</option>
      {/each}
    </select>
    <button type="submit" class="btn-primary">Register</button>
  </form>
</div>