import styles from './Footer.module.sass';
import Link from 'next/link';
import * as React from 'react';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <div className={styles.navigation}>
        <nav className={styles.container}>
          <div className={styles.right}>
            <Link href="https://mobile.twitter.com/BanyanStorage">
              <a className={styles.item}>Twitter</a>
            </Link>
            {/*TODO (amiller68): Populate these links*/}
            <Link href="/">
              <a className={styles.item}>Legal Info</a>
            </Link>
            <Link href="/">
              <a className={styles.item}>Brand</a>
            </Link>
            {/*TODO (amiller68): Make this point at our Documentation*/}
            <Link href="https://media.tenor.com/thBezjoRI-IAAAAC/dog-smile.gif">
              <a className={styles.item}>Documentation</a>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
