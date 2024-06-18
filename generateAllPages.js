(async () => {
  const pLimit = (await import("p-limit")).default;
  const limit = pLimit(30); // Concurrency limit

  async function revalidatePage(id) {
    try {
      await fetch(`http://localhost:3000/${id}`);
      console.log(`generate /${id}`);
    } catch (error) {
      console.error(`Error generate /${id}:`, error.message);
    }
  }

  async function generateAllPages() {
    const promises = [];

    for (let i = 1; i <= 5000; i++) {
      promises.push(limit(() => revalidatePage(i)));
    }

    await Promise.all(promises);
  }

  generateAllPages();
})();
