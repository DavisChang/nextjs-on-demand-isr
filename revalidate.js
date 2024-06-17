const axios = require("axios");
require("dotenv").config();

(async () => {
  const pLimit = (await import("p-limit")).default;
  const secretToken = process.env.MY_SECRET_TOKEN; // Ensure you have this environment variable set
  const limit = pLimit(30); // Concurrency limit

  async function revalidatePage(id) {
    try {
      await axios.post(
        `http://localhost:3000/api/revalidate?secret=${secretToken}&id=${id}`
      );
      console.log(`Revalidated /photo/${id}`);
    } catch (error) {
      console.error(`Error revalidating /photo/${id}:`, error.message);
    }
  }

  async function revalidateAllPages() {
    const promises = [];

    for (let i = 1; i <= 5000; i++) {
      promises.push(limit(() => revalidatePage(i)));
    }

    await Promise.all(promises);
  }

  revalidateAllPages();
})();
