<script>
    import { supabase } from '$lib/supabase/client';
    let images = [];
    let description = "";
  
    async function uploadImage(e) {
      const file = e.target.files[0];
      const { data, error } = await supabase.storage
        .from('catalogs')
        .upload(`professionals/${user.id}/${file.name}`, file);
  
      if (data) {
        await supabase
          .from('catalogs')
          .insert([{ professional_id: user.id, image_url: data.path, description }]);
        description = "";
        loadImages();
      }
    }
  
    async function loadImages() {
      const { data } = await supabase
        .from('catalogs')
        .select('*')
        .eq('professional_id', user.id);
      images = data || [];
    }
  
    onMount(loadImages);
  </script>
  
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">My Catalog</h1>
    <input type="file" on:change={uploadImage} class="input mb-4" />
    <input bind:value={description} placeholder="Image description" class="input mb-4" />
    
    <!-- Image Grid -->
    <div class="grid grid-cols-3 gap-4">
      {#each images as image}
        <img 
          src={supabase.storage.from('catalogs').getPublicUrl(image.image_url)} 
          class="rounded-lg shadow-md"
        />
      {/each}
    </div>
  </div>