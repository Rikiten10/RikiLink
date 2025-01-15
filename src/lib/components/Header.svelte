<script lang="ts">
    import { isMenuOpen } from '$lib/stores/menuStore';
  </script>
  
  <div class="fixed w-full bg-white shadow-md z-50">
    <div class="max-w-6xl mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-blue-500">RikiLink</div>
        <div class="hidden md:flex space-x-8">
          <a href="/" class="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/services" class="text-gray-700 hover:text-blue-500">Services</a>
          <a href="/professionals" class="text-gray-700 hover:text-blue-500">Find Professionals</a>
          <a href="/contact" class="text-gray-700 hover:text-blue-500">Contact</a>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login</button>
        </div>
        <button 
          class="md:hidden"
          on:click={() => $isMenuOpen = !$isMenuOpen}
        >
          {#if $isMenuOpen}
            <!-- X icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <!-- Menu icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          {/if}
        </button>
      </div>
      
      <!-- Mobile menu -->
      {#if $isMenuOpen}
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="/" class="block px-3 py-2 text-gray-700 hover:text-blue-500">Home</a>
            <a href="/services" class="block px-3 py-2 text-gray-700 hover:text-blue-500">Services</a>
            <a href="/professionals" class="block px-3 py-2 text-gray-700 hover:text-blue-500">Find Professionals</a>
            <a href="/contact" class="block px-3 py-2 text-gray-700 hover:text-blue-500">Contact</a>
            <button class="w-full text-left px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</button>
          </div>
        </div>
      {/if}
    </div>
  </div>