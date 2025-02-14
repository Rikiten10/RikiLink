<script>
  import { supabase } from '$lib/supabase/client';
  import { convertToNGN } from '$lib/utils/currency';

  let paymentMethod = "opay";
  let paymentProof = null;
  let paymentReference = "";
  let cardDetails = { number: "", expiry: "", cvv: "" };

  const opayAccount = {
    name: "Salami Patrick",
    number: "8059170363"
  };

  async function handlePayment() {
    // For card payments (convert USD to NGN)
    if (paymentMethod === "card") {
      const amountNGN = convertToNGN(3000); // Assume 3000 NGN = ~20 USD
      // Integrate Paystack/Flutterwave here
    }

    // For Opay transfers
    if (paymentMethod === "opay" && (!paymentProof || !paymentReference)) {
      alert("Upload proof and enter payment reference.");
      return;
    }

    // Upload proof to Supabase Storage
    const { error } = await supabase.storage
      .from('payment-proofs')
      .upload(`proofs/${paymentReference}.jpg`, paymentProof);

    if (error) alert("Payment failed: " + error.message);
    else {
      // Update subscription status
      await supabase
        .from('professionals')
        .update({ subscription_status: 'subscribed' })
        .eq('email', email);
      alert("Payment successful!");
      goto('/profile');
    }
  }
</script>

<div class="payment-gate">
  <h2 class="text-2xl font-bold mb-4">NGN 3,000 Monthly Subscription</h2>
  
  <!-- Payment Method Selection -->
  <select bind:value={paymentMethod} class="input mb-4">
    <option value="opay">Opay Transfer</option>
    <option value="card">Card (USD)</option>
  </select>

  <!-- Opay Transfer -->
  {#if paymentMethod === "opay"}
    <div class="mb-4">
      <p class="text-sm text-gray-600">Pay to:</p>
      <div class="p-4 bg-gray-50 rounded-lg">
        <p>Account Name: {opayAccount.name}</p>
        <p>Account Number: {opayAccount.number}</p>
      </div>
      <input
        bind:value={paymentReference}
        placeholder="Payment Reference"
        class="input mb-2 mt-2"
      />
      <input
        type="file"
        on:change={(e) => (paymentProof = e.target.files[0])}
        class="input mb-4"
      />
    </div>
  {/if}

  <!-- Card Payment -->
  {#if paymentMethod === "card"}
    <div class="mb-4">
      <input
        bind:value={cardDetails.number}
        placeholder="Card Number"
        class="input mb-2"
      />
      <input
        bind:value={cardDetails.expiry}
        placeholder="MM/YY"
        class="input mb-2"
      />
      <input
        bind:value={cardDetails.cvv}
        placeholder="CVV"
        class="input mb-4"
      />
    </div>
  {/if}

  <button on:click={handlePayment} class="btn-primary">Submit Payment</button>
</div>