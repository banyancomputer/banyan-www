import styles from '@components/navigation/header/Header.module.sass';
import Link from 'next/link';
import Tag from '@components/tags/Tag';
import * as React from 'react';

export interface IDesktop extends React.ComponentPropsWithoutRef<'header'> {}

const Desktop: React.FC<IDesktop> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className={styles.navigation}>
        <nav className={styles.container}>
          <div className={styles.left}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span className={styles.logo}>
                {' '}
                Krondor <Tag>Alpha</Tag>{' '}
              </span>
            </Link>
          </div>
          <div className={styles.right}>
            <button> Connect </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Desktop;
