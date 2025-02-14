<script>
    import { supabase } from '$lib/supabase';
  
    async function uploadImage(event) {
      const file = event.target.files[0];
      const { data, error } = await supabase.storage
        .from('catalogs')
        .upload(`professionals/${user.id}/${file.name}`, file);
  
      if (data) {
        await supabase
          .from('catalogs')
          .insert([{ professional_id: user.id, image_url: data.path }]);
      }
    }
  </script>
  
  <div class="catalog-upload">
    <input type="file" multiple on:change={uploadImage} />
    <div class="image-grid">
      {#each images as image}
        <img src={supabase.storage.from('catalogs').getPublicUrl(image.image_url)} />
      {/each}
    </div>
  </div>