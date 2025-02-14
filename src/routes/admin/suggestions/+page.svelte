<script>
    import { supabase } from '$lib/supabase';
    import AdminResponse from '../../../components/AdminResponse.svelte';
    import { onMount } from 'svelte';
  
    let suggestions = [];
  
    // Load suggestions
    async function loadSuggestions() {
      const { data } = await supabase
        .from('suggestions')
        .select('*')
        .order('created_at', { ascending: false });
      suggestions = data || [];
    }
  
    // Load suggestions on component mount
    onMount(loadSuggestions);
  </script>
  
  <div class="admin-suggestions">
    <h1 class="text-2xl font-bold mb-6">Admin Suggestions</h1>
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
        {:else}
          <AdminResponse suggestionId={suggestion.id} />
        {/if}
      </div>
    {/each}
  </div>