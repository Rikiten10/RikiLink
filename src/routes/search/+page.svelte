<script>
    import { supabase } from '$lib/supabase/client';
    let searchCategory = "";
    let professionals = [];
  
    async function searchProfessionals() {
      const { data } = await supabase
        .from('professionals')
        .select('name, category, email')
        .eq('category', searchCategory)
        .eq('subscription_status', 'subscribed');
      professionals = data || [];
    }
  </script>
  
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Find Professionals</h1>
    <select bind:value={searchCategory} class="input mb-4">
      <option value="" disabled>Select Category</option>
      {#each categories as cat}
        <option value={cat}>{cat}</option>
      {/each}
    </select>
    <button on:click={searchProfessionals} class="btn-primary mb-6">Search</button>
  
    <!-- Results -->
    {#each professionals as pro}
      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 class="font-bold">{pro.name}</h3>
        <p class="text-sm text-gray-600">{pro.category}</p>
      </div>
    {/each}
  </div>