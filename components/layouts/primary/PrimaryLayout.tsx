import Head from 'next/head';
import styles from './PrimaryLayout.module.sass';

export interface IPrimaryLayout {
  // children: '{{component}}';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
