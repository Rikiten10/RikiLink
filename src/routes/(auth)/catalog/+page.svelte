<script>
  import { lazyLoadMedia } from '$lib/utils/mediaHelpers';
  import { onMount } from 'svelte';

  let mediaRef;

  onMount(() => {
    if (mediaRef) lazyLoadMedia(mediaRef);
  });
</script>

<!-- Image -->
<img 
  data-src={getImageUrl(pro.id)} 
  alt={pro.name} 
  class="w-full h-48 object-cover mb-4 rounded-lg"
  bind:this={mediaRef}
/>

<!-- Video -->
<video 
  data-src={getVideoUrl(pro.id)} 
  class="w-full rounded-lg" 
  bind:this={mediaRef}
  controls
>
  <source type="video/mp4" />
</video>