import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { StarIcon, LinkIcon } from '../icons';

export default function PhotoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
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
          / <Link href="/">on-demand-isr</Link> /{' '}
          <a
            href="/"
            rel="noreferrer"
          >
            #{params.id}
          </a>
        </div>
      </div>
      {children}
    </main>
  );
}
