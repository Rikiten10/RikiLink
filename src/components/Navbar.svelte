<script>
  import { session } from '$app/stores';
  import { supabase } from '$lib/supabase/client';

  let isMenuOpen = false;
  const categories = [
    "Hair Stylist",
    "Makeup Artist",
    "Nail Technician",
    "Fashion Designer",
    "House Cleaner",
    "Laundry Service",
    "Market Shopper",
    "Cook (Home or Away)",
    "Thrift Vendor",
    "Accessories Vendor",
    "Event Planner"
  ];

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }
</script>

<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-blue-600">RikiLink</a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        <a href="/search" class="text-gray-600 hover:text-blue-600">Find Professionals</a>
        <a href="/blogs" class="text-gray-600 hover:text-blue-600">Blogs</a>
        <a href="/contact" class="text-gray-600 hover:text-blue-600">Contact</a>
        {#if $session}
          <a href="/auth/profile" class="text-gray-600 hover:text-blue-600">Profile</a>
          <button on:click={handleLogout} class="text-gray-600 hover:text-blue-600">Logout</button>
        {:else}
          <a href="/login" class="text-gray-600 hover:text-blue-600">Login</a>
          <a href="/register" class="text-gray-600 hover:text-blue-600">Register</a>
        {/if}
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        class="md:hidden"
        on:click={() => (isMenuOpen = !isMenuOpen)}
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden py-4 space-y-2">
        <a href="/search" class="block text-gray-600 hover:text-blue-600">Find Professionals</a>
        <a href="/blogs" class="block text-gray-600 hover:text-blue-600">Blogs</a>
        <a href="/contact" class="block text-gray-600 hover:text-blue-600">Contact</a>
        {#if $session}
          <a href="/auth/profile" class="block text-gray-600 hover:text-blue-600">Profile</a>
          <button on:click={handleLogout} class="block text-gray-600 hover:text-blue-600">Logout</button>
        {:else}
          <a href="/login" class="block text-gray-600 hover:text-blue-600">Login</a>
          <a href="/register" class="block text-gray-600 hover:text-blue-600">Register</a>
        {/if}
      </div>
    {/if}
  </div>
</nav>