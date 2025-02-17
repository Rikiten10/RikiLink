<script>
  import ProgressBar from './ProgressBar.svelte';
  let uploadProgress = 0;

  async function handleUpload(file, type) {
    const { error } = await supabase.storage
      .from('catalogs')
      .upload(`professionals/${user.id}/${file.name}`, file, {
        cacheControl: '3600',
        onProgress: (progressEvent) => {
          uploadProgress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
        }
      });
  }
</script>

<ProgressBar {uploadProgress} />