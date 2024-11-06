<script>
  let { children, ...props } = $props();
  import {loadStripe} from '@stripe/stripe-js';
  import {PUBLIC_STRIPE_KEY} from '$env/static/public';
  import {goto} from '$app/navigation';

  async function onclick() {
    try {
      const stripe = await loadStripe(PUBLIC_STRIPE_KEY)

      const response = await fetch('/api/checkout', {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        }
      })
      const {sessionId} = await response.json()

      await stripe.redirectToCheckout({
        sessionId
      })

    } catch (error) {
     goto('/checkout/failure')
    }
  }
</script>

<button {...props} {onclick}>{@render children()}</button>

<style>
  button {
    background-color: black;
    color: white;
    margin-top: 20px;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
</style>
