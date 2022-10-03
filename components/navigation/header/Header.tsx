import Link from 'next/link';
import styles from './Header.module.scss';
import Tag from '../../tags/Tag';
import * as React from 'react';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

// Read this from context
export const auth = false;

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className={styles.navigation}>
        <nav className={styles.container}>
          <div className={styles.left}>
            <Link href="/">
              <a className={styles.logo}>
                Banyan <Tag>Alpha</Tag>
              </a>
            </Link>
          </div>
          {/*TODO (amiller68): Make these point to pages*/}
          <div className={styles.right}>
            <Link href="/">
              <a className={styles.item}>Sign in</a>
            </Link>

            {/*TODO (amiller68): Make this point at our Documentation*/}
            <Link href="https://media.tenor.com/thBezjoRI-IAAAAC/dog-smile.gif">
              <a className={styles.item}>Documentation</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
