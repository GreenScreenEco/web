import styles from './Navbar.module.css'
import Link from "./Link";
import InstallButton from "./InstallButton";
import {useState} from "react";
import classNames from "classnames";
import Button from "./Button";

export type ActivePage = "root" | "how-it-works" | "about-us" | "search-companies" | null

type Props = {
  activePage: ActivePage,
}

export default function Navbar({activePage}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const classForActivePage = (testPage: ActivePage): string => {
    return testPage === activePage ? styles.navbarActivePage : "";
  }
  const classForCollapsibleItems = !menuOpen ? styles.navbarHiddenItem : "";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarSiteTitleContainer}>
        <Link href="/" className={styles.navbarSiteTitle}>GreenScreen</Link>
        <Button style="passthrough" onClick={() => setMenuOpen(!menuOpen)} className={styles.navbarMenuToggle}>
          <img src="/hamburger_menu_icon.svg" alt="navigation menu"/>
        </Button>
      </div>
      <Link href="/how-it-works" className={classNames(classForActivePage("how-it-works"), classForCollapsibleItems)}>How It Works</Link>
      <Link href="/search-companies" className={classNames(classForActivePage("search-companies"), classForCollapsibleItems)}>Search Companies</Link>
      <Link href="/about-us" className={classNames(classForActivePage("about-us"), classForCollapsibleItems)}>About Us</Link>
      <InstallButton style="simple" className={classForCollapsibleItems} />
    </nav>
  );
}