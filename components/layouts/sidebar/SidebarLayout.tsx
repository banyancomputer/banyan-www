import styles from './SidebarLayout.module.sass';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      {/*<input className={styles.input} placeholder="Search..." />*/}
    </nav>
  );
};

export default SidebarLayout;
