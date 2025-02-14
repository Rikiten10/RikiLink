<script>
    import Navbar from '../components/Navbar.svelte';
    
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
  </script>
  
  <Navbar />
  
  <main class="max-w-7xl mx-auto px-4 py-8">
    <!-- Hero Section -->
    <div class="text-center py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Find Trusted Professionals in Nigeria
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Connect with skilled professionals for all your needs.
      </p>
      <a href="/search" class="btn-primary">Get Started</a>
    </div>
  
    <!-- Categories Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {#each categories as category}
        <a 
          href="/search?category={category}" 
          class="p-4 bg-gray-50 rounded-lg text-center hover:bg-blue-50 transition-colors"
        >
          {category}
        </a>
      {/each}
    </div>
  
    <!-- Featured Professionals -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-8">Featured Professionals</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Replace with dynamic data -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="/placeholder-professional.jpg" class="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 class="font-bold">Jane Doe</h3>
          <p class="text-gray-600">Hair Stylist</p>
        </div>
      </div>
    </section>
  </main>
  
  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p class="mb-4">© 2024 RikiLink. All rights reserved.</p>
      <div class="flex justify-center space-x-4">
        <a href="/about" class="hover:text-blue-400">About</a>
        <a href="/contact" class="hover:text-blue-400">Contact</a>
        <a href="/privacy" class="hover:text-blue-400">Privacy Policy</a>
      </div>
    </div>
  </footer>