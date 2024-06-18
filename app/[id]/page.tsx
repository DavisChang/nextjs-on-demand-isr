import { fetchPhotoPageData } from '../../lib/fetchLib';

export const dynamic = 'force-static',
  dynamicParams = true;

export function generateStaticParams() {
  // Optionally pre-build some paths at build time

  // This is left empty if you don't want to pre-build any pages
  // return [];

  // Or pre-build id: 100, 200, 300, 400
  const pathsToPreBuild = [100, 200, 300, 400].map((id) => ({
    id: String(id),
  }));
  return pathsToPreBuild;
}

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const {albumId, id, title, url, thumbnailUrl} = await fetchPhotoPageData(params.id);

  return (
    <div>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>albumId: {albumId}</p>
      <p>url: {url}</p>
      <p>thumbnailUrl: {thumbnailUrl}</p>
    </div>
  );
}
