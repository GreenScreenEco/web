import styles from './SearchBar.module.css'
import Button from "./Button";

type Props = {
  searchText: string,
  setSearchText: (string) => void,
  onDoSearch: () => void,
}

export default function SearchBar({searchText, setSearchText}: Props) {
  return (
    <div className={styles.searchBar}>
      <input className={styles.searchInput} type="text" value={searchText} onChange={e => setSearchText(e.target.value)}/>
      <Button className={styles.searchButton} style="borderless" onClick={() => {}}>Search</Button>
    </div>
  );
}