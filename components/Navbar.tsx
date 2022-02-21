import styles from './Navbar.module.css'
import Link from "./Link";
import InstallButton from "./InstallButton";

export type ActivePage = "root" | "how-it-works" | "about-us" | null

type Props = {
  activePage: ActivePage,
}

export default function Navbar({activePage}: Props) {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarSiteTitle}>GreenScreen</Link>
      <Link href="/how-it-works" className={activePage == "how-it-works" ? styles.navbarActivePage : undefined}>How It Works</Link>
      <Link href="/about-us" className={activePage == "about-us" ? styles.navbarActivePage : undefined}>About Us</Link>
      <InstallButton style="simple" />
    </nav>
  );
}