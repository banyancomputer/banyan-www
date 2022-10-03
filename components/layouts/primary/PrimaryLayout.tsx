import Head from 'next/head';
import styles from './PrimaryLayout.module.sass';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = (props: IPrimaryLayout) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default PrimaryLayout;
