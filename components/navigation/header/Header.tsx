import Link from 'next/link';
import styles from './Header.module.sass';
import Tag from '../../tags/Tag';
import * as React from 'react';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {
  isAuthenticated: boolean;
}

// Read this from context
export const auth = false;

const Header: React.FC<IHeader> = ({
  isAuthenticated,
  className,
  ...headerProps
}) => {
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
            <Link href={isAuthenticated ? '/home' : '/sign-in'}>
              <a className={styles.item}>
                {isAuthenticated ? 'Home' : 'Sign In'}
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
