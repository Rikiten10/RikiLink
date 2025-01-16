<script>
    import Header from '$lib/components/Header.svelte';
    </script>
    
    <Header />
    
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
    
    <footer class="bg-gray-100 py-6 mt-auto">
      <div class="container mx-auto px-4 text-center">
        <p>© 2025 RikiLink. All rights reserved.</p>
      </div>
    </footer>