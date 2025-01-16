<script>
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1 and its key features.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "MongoDB"],
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project 2",
      description: "Description of project 2 and its key features.",
      image: "/api/placeholder/400/300",
      tags: ["Svelte", "Firebase", "Tailwind"],
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project 3",
      description: "Description of project 3 and its key features.",
      image: "/api/placeholder/400/300",
      tags: ["Vue", "Express", "PostgreSQL"],
      projectUrl: "#",
      githubUrl: "#"
    }
  ];
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tags as tag}
                <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              {/each}
            </div>
            <div class="flex space-x-4">
              <a 
                href={project.projectUrl}
                class="text-blue-600 hover:text-blue-800"
              >
                View Project →
              </a>
              <a 
                href={project.githubUrl}
                class="text-gray-600 hover:text-gray-800"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>