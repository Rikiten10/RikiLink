<script>
  import BlogComments from '../../../components/BlogComments.svelte';
  export let data; // Contains blogId from route params
</script>

<!-- Blog Content -->
<article class="blog-post">
  <!-- Your blog content here -->
</article>

<!-- Comment Section -->
<BlogComments blogId={data.blogId} />