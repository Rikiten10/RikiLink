<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  let submitting = false;
  let submitted = false;
  let error = null;

  async function handleSubmit() {
    submitting = true;
    error = null;

    try {
      // Replace with your form handling logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      submitted = true;
      formData = { name: '', email: '', message: '' };
    } catch (err) {
      error = 'An error occurred. Please try again.';
    } finally {
      submitting = false;
    }
  }
</script>

<div class="max-w-2xl mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold mb-6">Contact Me</h1>
  
  {#if submitted}
    <div class="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
      Thank you for your message! I'll get back to you soon.
    </div>
  {/if}

  {#if error}
    <div class="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
      {error}
    </div>
  {/if}

  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        bind:value={formData.name}
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
    </div>
    
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        bind:value={formData.email}
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        bind:value={formData.message}
        rows="4"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      ></textarea>
    </div>
    
    <button
      type="submit"
      disabled={submitting}
      class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
    >
      {submitting ? 'Sending...' : 'Send Message'}
    </button>
  </form>
</div>