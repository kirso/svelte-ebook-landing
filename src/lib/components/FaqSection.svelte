<script>
  import { FaqItem, Button } from '$components';
  import xIcon from '$icons/twitter.webp';
  const faqs = [
    {
      question: 'How long does it take to get a visa?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'What format is the ebook?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Can I get a refund?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'How long does it take to get a visa?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  let questionExpanded = $state(-1);

  function onclick(index) {
    questionExpanded === index ? (questionExpanded = -1) : questionExpanded = index;;

  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Frequently asked questions</h2>
  <div class="faq-container">
    {#each faqs as faq, index}
      <FaqItem
        {faq}
        isExpanded={index === questionExpanded}
        onclick={() => onclick(index)}
      />
    {/each}
  </div>
  <div class="additional-info mt-m">
    <Button class="mb-s">BUY NOW</Button>
    <p class="mt-m">Any other questions?</p>
    <a href="https://x.com/kirso">
      <p>
        Hit me up on X <img class="x-icon" src="{xIcon}" alt="x.com" />
      </p>
    </a>
  </div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .x-icon {
    display: inline;
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
