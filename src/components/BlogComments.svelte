<script>
  import { supabase } from '$lib/supabase/client';

  export let blogId;
  let comment = "";
  let name = "";

  async function submitComment() {
    const { error } = await supabase
      .from('comments')
      .insert([{ blog_id: blogId, content: comment, commenter_name: name || 'Anonymous' }]);

    if (error) alert("Failed to post comment: " + error.message);
    else comment = "";
  }
</script>

<div class="comment-section">
  <h3 class="text-xl font-bold mb-4">Comments</h3>
  <input bind:value={name} placeholder="Name (optional)" class="input mb-2" />
  <textarea bind:value={comment} placeholder="Your comment..." class="input mb-4"></textarea>
  <button on:click={submitComment} class="btn-primary">Post Comment</button>
</div>