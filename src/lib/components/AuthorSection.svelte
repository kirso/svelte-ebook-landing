<script>
  import authorPic from '$assets/profile_pic.jpg';
</script>

<section class="landing-page-section">
  <h2 class="mb-l">About the author</h2>
  <div class="author-container">
    <div class="author-text">
      <p class="mb-m">
        Kirill So is an expatriate with seven years of experience living
        Singapore. Originally, from Russia, Kirill left the hustle of corporate
        world to embrace a nmore fulfilling life on the sun-soaked coasts of
        Spain. Through his own journey, he has navigated the challenges of
        securing visas, finding the perfect home, and adapting to a new culture,
        making him a valuable resource for those seeking to make a similar
        transition.
      </p>
      <p>
        Kirill's advice is rooted in real-life experience, having learned
        firsthand the intricacies of moving to a new country. The goal is to
        help others avoid common pitfalls and make the transition to life i
        nSingapore as smooth as possible. When not sharing his experience,
        Kirill enjoys exploring SEA, rich culture and history, fully embracing
        the lifestyle.
      </p>
    </div>
    <img src="{authorPic}" alt="Kirill So" />
  </div>
</section>

<style>
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>
