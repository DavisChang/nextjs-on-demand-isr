import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import {
  StarIcon,
} from './icons';
import { fetchPhotoAndRepoData } from '../lib/fetchLib';

export default async function Page() {
  const { list } =
    await fetchPhotoAndRepoData();

  return (
    <main className={styles.main}>
      <div className={styles.repo}>
        <div className={styles.repo_title}>
          <StarIcon />{' '}
          <a
            href="/"
            rel="noreferrer"
          >
            nextjs
          </a>{' '}
          / <Link href="/">on-demand-isr</Link>
        </div>
        <div className={styles.forks_stars}>
          <a
            href="/"
            rel="noreferrer"
          >
            Total: {new Number(list.length).toLocaleString()}
          </a>
        </div>
      </div>
      <div className={styles.issues}>
        {list.map((data: any) => (
          <Link
            key={data.id}
            href={`/${data.id}`}
            className={styles.issue}
          >
            <div>
              <div className={styles.photo_title}>id: {data.id}</div>
              <div className={styles.photo_title}>title: {data.title}</div>
              <div className={styles.photo_title}>url: {data.url}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
