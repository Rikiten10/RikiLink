<script>
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  import DOMPurify from 'dompurify';
  const cleanInput = DOMPurify.sanitize(userInput)

  export let blogId;
  let comment = "";
  let commenterName = "";
  let comments = [];

  // Load existing comments
  async function loadComments() {
    const { data } = await supabase
      .from('comments')
      .select('*')
      .eq('blog_id', blogId)
      .order('created_at', { ascending: false });
    comments = data || [];
  }

  // Submit new comment
  async function submitComment() {
    const cleanComment = DOMPurify.sanitize(comment);
    const cleanName = DOMPurify.sanitize(commenterName);

    const { error } = await supabase
      .from('comments')
      .insert([{ 
        blog_id: blogId, 
        comment: cleanComment, 
        commenter_name: cleanName 
      }]);

    if (error) alert("Failed to post comment.");
    else {
      comment = "";
      commenterName = "";
      loadComments(); // Refresh comments
    }
  }

  // Load comments on component mount
  onMount(loadComments);
</script>

<div class="comment-section">
  <h3 class="text-xl font-bold mb-4">Comments ({comments.length})</h3>

  <!-- Comment Form -->
  <form on:submit|preventDefault={submitComment} class="mb-8">
    <input
      bind:value={commenterName}
      placeholder="Name (optional)"
      class="input mb-2"
    />
    <textarea
      bind:value={comment}
      placeholder="Write a comment..."
      class="input mb-4"
      rows="3"
    ></textarea>
    <button type="submit" class="btn-primary">Post Comment</button>
  </form>

  <!-- Comments List -->
  {#each comments as comment}
    <div class="comment mb-4 p-4 bg-gray-50 rounded-lg">
      <p class="text-sm text-gray-600 mb-1">
        {comment.commenter_name || "Anonymous"} • {new Date(comment.created_at).toLocaleDateString()}
      </p>
      <p class="text-gray-800">{comment.comment}</p>
    </div>
  {/each}
</div>