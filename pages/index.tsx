// import FileCard from '../components/cards/file/FileCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.sass';
import { NextPageWithLayout } from './page';
import * as React from 'react';

export const getServerSideProps = async (_context: any) => {
  return {
    props: {
      isAuthenticated: true,
    },
  };
};

const Home: NextPageWithLayout = (_props: any) => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Welcome to Banyan!</h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout auth={page.props.auth}>{page}</PrimaryLayout>;
};
