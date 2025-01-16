<script>
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' }
  ];

  const sections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Projects', url: '/projects' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact', url: '/contact' }
      ]
    }
  ];
</script>

<footer class="bg-gray-900 text-white pt-12 pb-8">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <!-- Brand -->
      <div>
        <h3 class="text-xl font-bold mb-4">RikiLink</h3>
        <p class="text-gray-400">Creating meaningful digital experiences through innovative web development.</p>
      </div>
      
      <!-- Navigation -->
      {#each sections as section}
        <div>
          <h4 class="text-lg font-semibold mb-4">{section.title}</h4>
          <ul class="space-y-2">
            {#each section.links as link}
              <li>
                <a 
                  href={link.url} 
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    
    <div class="border-t border-gray-800 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400">© {currentYear} RikiLink. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          {#each socialLinks as link}
            <a 
              href={link.url}
              class="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer>