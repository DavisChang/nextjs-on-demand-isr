import "server-only";
import { notFound } from "next/navigation";

export async function fetchPhotoPageData(pid: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${pid}`
  );
  const { albumId, id, title, url, thumbnailUrl } = await response.json();

  console.log(`[Next.js] Fetching data for /${id} - [${id}] title: ${title}`);

  if (!id) {
    notFound();
  }

  return { albumId, id, title, url, thumbnailUrl };
}

export async function fetchPhotoAndRepoData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const list = await response.json();
  return { list };
}
