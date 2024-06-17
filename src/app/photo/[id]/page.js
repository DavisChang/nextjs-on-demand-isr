import axios from "axios";
import { notFound } from "next/navigation";

export const dynamic = "force-static",
  dynamicParams = true;

export async function generateStaticParams() {
  // Optionally pre-build some paths at build time

  // This is left empty if you don't want to pre-build any pages
  // return [];

  // Or pre-build id: 100, 200, 300, 400
  const pathsToPreBuild = [100, 200, 300, 400].map((id) => ({
    id: String(id),
  }));
  return pathsToPreBuild;
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  const photo = response.data;

  if (!photo) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: photo.title,
  };
}

export default async function PhotoPage({ params }) {
  const { id } = params;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  const photo = response.data;

  if (!photo) {
    notFound();
  }

  return (
    <div>
      <h1>{`[${id}] ${photo.title}`}</h1>
      <img src={photo.url} alt={photo.title} />
    </div>
  );
}
