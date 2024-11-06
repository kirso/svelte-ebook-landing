<script>
  const chapters = [
    {
      number: 1,
      title: 'Chapter 1: Navigating Singapore',
      strapline: 'Understanding visas, residency and legal essentials',
      excerpt:
        'asdfavoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      number: 2,
      title: 'Chapter 2: Finding a Job',
      strapline: 'How to find a job in Singapore',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, asdfasf Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      number: 3,
      title: 'Chapter 3: Living in Singapore',
      strapline: 'Daily life in Singapore',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maggaborum.',
    },
    {
      number: 4,
      title: 'Chapter 4: Working in Singapore',
      strapline: 'Working in Singapore',
      excerpt: 'Lorem ',
    },
    {
      number: 5,
      title: 'Chapter 5: Singapore Culture',
      strapline: 'Singapore Culture',
      excerpt: 'Lorem  anim id est laborum.',
    },
    {
      number: 6,
      title: 'Chapter 6: Singapore Food',
      strapline: 'Singapore Food',
      excerpt: 'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  let selectedChapterNumber = $state(1);
  let selectedChapter = $derived(
    chapters.find((chapter) => chapter.number === selectedChapterNumber)
  );

  function selectChapter(chapter) {
    selectedChapterNumber = chapter.number;
  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l">What you are getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter}
        <li>
          <button
            class="chapter-title"
            class:selected-chapter-title="{selectedChapterNumber ==
              chapter.number}"
            aria-controls="{`chapter-info-${chapter.number}`}"
            aria-expanded="{selectChapter === chapter.number}"
            onclick="{() => selectChapter(chapter)}"
          >
            <h3>Chapter {chapter.number}: {chapter.strapline}</h3>
          </button>
        </li>
      {/each}
    </ul>
    <div class="chapter-info">
      <h3 class="italic chapter-strapline mb-s">
        {selectedChapter.title}
      </h3>
      <p>
        {selectedChapter.excerpt}
      </p>
    </div>
  </div>
</section>

<style>
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
