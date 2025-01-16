<script>
  export let post = {
    title: '',
    date: '',
    excerpt: '',
    slug: '',
    readingTime: '',
    author: '',
    tags: []
  };
</script>

<article class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
  <div class="flex items-center gap-4 mb-4">
    <span class="text-sm text-gray-600">{post.date}</span>
    <span class="text-sm text-gray-600">·</span>
    <span class="text-sm text-gray-600">{post.readingTime} min read</span>
  </div>
  
  <h2 class="text-2xl font-bold mb-3 hover:text-blue-600">
    <a href="/blog/{post.slug}">{post.title}</a>
  </h2>
  
  <p class="text-gray-700 mb-4">{post.excerpt}</p>
  
  <div class="flex flex-wrap gap-2 mb-4">
    {#each post.tags as tag}
      <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
        {tag}
      </span>
    {/each}
  </div>
  
  <div class="flex items-center justify-between">
    <span class="text-sm text-gray-600">By {post.author}</span>
    <a 
      href="/blog/{post.slug}" 
      class="text-blue-600 hover:text-blue-800 font-medium"
    >
      Read more →
    </a>
  </div>
</article>