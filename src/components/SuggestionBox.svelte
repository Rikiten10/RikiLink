<script>
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';

  let suggestions = [];
  let newSuggestion = "";
  let submitterName = "";
  let submitterEmail = "";

  // Load suggestions
  async function loadSuggestions() {
    const { data } = await supabase
      .from('suggestions')
      .select('*')
      .order('created_at', { ascending: false });
    suggestions = data || [];
  }

  // Submit new suggestion
  async function submitSuggestion() {
    const { error } = await supabase
      .from('suggestions')
      .insert([{ 
        suggestion: newSuggestion, 
        submitter_name: submitterName, 
        submitter_email: submitterEmail 
      }]);

    if (error) alert("Failed to submit suggestion.");
    else {
      newSuggestion = "";
      submitterName = "";
      submitterEmail = "";
      loadSuggestions(); // Refresh suggestions
    }
  }

  // Load suggestions on component mount
  onMount(loadSuggestions);
</script>

<div class="suggestion-box">
  <h3 class="text-xl font-bold mb-4">Suggestions</h3>

  <!-- Suggestion Form -->
  <form on:submit|preventDefault={submitSuggestion} class="mb-8">
    <input
      bind:value={submitterName}
      placeholder="Name (optional)"
      class="input mb-2"
    />
    <input
      bind:value={submitterEmail}
      type="email"
      placeholder="Email (optional)"
      class="input mb-2"
    />
    <textarea
      bind:value={newSuggestion}
      placeholder="Your suggestion..."
      class="input mb-4"
      rows="4"
    ></textarea>
    <button type="submit" class="btn-primary">Submit</button>
  </form>

  <!-- Suggestions List -->
  {#each suggestions as suggestion}
    <div class="suggestion mb-4 p-4 bg-gray-50 rounded-lg">
      <p class="text-sm text-gray-600 mb-1">
        {suggestion.submitter_name || "Anonymous"} • {new Date(suggestion.created_at).toLocaleDateString()}
      </p>
      <p class="text-gray-800 mb-2">{suggestion.suggestion}</p>
      {#if suggestion.admin_response}
        <div class="admin-response p-3 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-600 mb-1">Admin Response:</p>
          <p class="text-blue-800">{suggestion.admin_response}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>