<script>
    import { supabase } from '$lib/supabase/client';
    let title = "";
    let content = "";
  
    async function createBlog() {
      const { error } = await supabase
        .from('blogs')
        .insert([{ title, content, admin_id: supabase.auth.user().id }]);
  
      if (error) alert("Failed to create blog: " + error.message);
      else {
        title = "";
        content = "";
        alert("Blog published!");
      }
    }
  </script>
  
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Create Blog Post</h2>
    <input bind:value={title} placeholder="Title" class="input mb-2" />
    <textarea bind:value={content} placeholder="Content" class="input mb-4 h-48"></textarea>
    <button on:click={createBlog} class="btn-primary">Publish</button>
  </div>