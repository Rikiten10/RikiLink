<script>
    let title = "";
    let content = "";
  
    async function createBlog() {
      await supabase
        .from('blogs')
        .insert([{ title, content, admin_id: user.id }]);
    }
  </script>
  
  <div class="admin-blog">
    <input bind:value={title} placeholder="Title" />
    <textarea bind:value={content} placeholder="Content" />
    <button on:click={createBlog}>Publish</button>
  </div>