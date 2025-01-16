<script>
  import { isMenuOpen } from '$lib/stores/menuStore';

  function toggleMenu() {
    $isMenuOpen = !$isMenuOpen;
  }
</script>

<header class="bg-white shadow-sm">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-xl font-bold text-blue-600">RikiLink</a>
      
      <!-- Mobile menu button -->
      <button class="md:hidden" on:click={toggleMenu}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if $isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>

      <!-- Desktop navigation -->
      <div class="hidden md:flex space-x-6">
        <a href="/" class="hover:text-blue-600">Home</a>
        <a href="/about" class="hover:text-blue-600">About</a>
        <a href="/projects" class="hover:text-blue-600">Projects</a>
        <a href="/blog" class="hover:text-blue-600">Blog</a>
        <a href="/contact" class="hover:text-blue-600">Contact</a>
      </div>
    </div>

    <!-- Mobile menu -->
    {#if $isMenuOpen}
      <div class="md:hidden mt-4 space-y-2">
        <a href="/" class="block hover:text-blue-600 py-2">Home</a>
        <a href="/about" class="block hover:text-blue-600 py-2">About</a>
        <a href="/projects" class="block hover:text-blue-600 py-2">Projects</a>
        <a href="/blog" class="block hover:text-blue-600 py-2">Blog</a>
        <a href="/contact" class="block hover:text-blue-600 py-2">Contact</a>
      </div>
    {/if}
  </nav>
</header>