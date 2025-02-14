<script>
    import { supabase } from '$lib/supabase';
    let message = "";
  
    async function sendMessage(receiverId) {
      await supabase
        .from('chats')
        .insert([{ sender_id: user.id, receiver_id: receiverId, message }]);
      message = "";
    }
  
    // Realtime listener for new messages
    supabase
      .channel('chats')
      .on('postgres_changes', { event: 'INSERT', schema: 'public' }, (payload) => {
        // Update UI with new message
      })
      .subscribe();
  </script>
  
  <div class="chat-box">
    {#each messages as msg}
      <div class="message">{msg.content}</div>
    {/each}
    <input bind:value={message} placeholder="Type a message..." />
    <button on:click={sendMessage}>Send</button>
  </div>