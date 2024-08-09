import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { StarIcon } from "../icons";
import { ThemeContextProvider } from "../../contexts/theme-context";

export default function ReduxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <div className={styles.repo}>
        <div className={styles.repo_title}>
          <StarIcon />{" "}
          <a href="/" rel="noreferrer">
            nextjs
          </a>{" "}
          / <Link href="/redux">redux</Link>
        </div>
      </div>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </main>
  );
}
