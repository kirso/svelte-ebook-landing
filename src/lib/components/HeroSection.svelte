<script>
  import bookCover from '$assets/book_cover.png';
  import phoneCover from '$assets/phone_cover.png';
</script>

<section class="hero">
  <div class="text-center hero-showcase bold">
    <h1 class="purple mb-xs">MOVE TO SINGAPORE</h1>
    <h4 class="italic semi-bold">Don't make the same mistakes.</h4>
    <div class="images">
      <img src="{bookCover}" class="book-cover" alt="book cover" />
      <img class="phone-cover" src="{phoneCover}" alt="phone cover" />
    </div>
  </div>
  <div class="text-center hero-text white">
    <h1>THIS EBOOK WILL SAVE YOU MONEY</h1>
    <p class="light-grey">
      I moved to Singapore seven years ago. The process was painful and
      difficult. I learned most things the hard way: finding a job, getting a
      visa, calculating my cost of living, choosing an appartment. That's why I
      wrote this e-book, to tell you how I did it. No bullshit, no stress.'
    </p>
  </div>
</section>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<style>
  .hero {
    display: flex;
    height: 100vh;
    overflow-y: hidden;
  }

  .hero-showcase {
    position: relative;
    width: 50%;
    padding: 100px 16px 0 16px;
    background: linear-gradient(
      135deg,
      #e2cbff,
      #e2cbff 25%,
      #deeaff 50%,
      #ece5ff 75%,
      #927bce
    );
  }

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-text {
    padding: 100px 5%;
    width: 50%;
    background-color: black;
  }

  .book-cover {
    position: absolute;
    right: 2%;
    bottom: 0;
    width: 65%;
    transform: translateY(30%);
  }

  .phone-cover {
    position: absolute;
    width: 35%;
    bottom: 0;
    right: 52%;
    transform: translateY(25%);
  }

  @media (max-width: 1024px) {
    .hero-showcase,
    .hero-text {
      padding: 60px 24px;
    }

    .book-cover {
      width: 70%;
      right: 0;
    }

    .phone-cover {
      width: 40%;
      right: 48%;
    }

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      height: auto;
      overflow-y: visible;
    }

    .hero-showcase,
    .hero-text {
      width: 100%;
      padding: 40px 16px;
    }

    .images {
      height: 400px;
      margin-bottom: 40px;
    }

    .book-cover {
      width: 80%;
      right: -15%;
      transform: translateY(20%);
    }

    .phone-cover {
      width: 45%;
      right: 45%;
      transform: translateY(15%);
    }
  }

  @media (max-width: 480px) {
    .hero-showcase,
    .hero-text {
      padding: 30px 16px;
    }

    .images {
      height: 300px;
    }

    .book-cover {
      width: 85%;
      right: -10%;
    }

    .phone-cover {
      width: 50%;
      right: 40%;
    }

    h1 {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
</style>
