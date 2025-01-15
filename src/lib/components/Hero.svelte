<script>
    export let title = 'Welcome to Our Website';
    export let subtitle = 'We are glad to have you here.';
  </script>
  
  <section class="hero">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
  
  <style>
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem;
      background-color: #f5f5f5;
    }
    h1 {
      font-size: 2.5rem;
      color: #333;
    }
    p {
      font-size: 1.25rem;
      color: #666;
    }
  </style>
  