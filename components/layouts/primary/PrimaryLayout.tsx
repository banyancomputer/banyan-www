import Page from './../Page';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import React from 'react';
import styles from './PrimaryLayout.module.sass';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
  auth: boolean;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = (props: IPrimaryLayout) => {
  return (
    <>
      <Page
        title={'Banyan'}
        description={'Stage on IPFS!'}
        url={'banyan.computer'}
      >
        <div className={`min-h-screen flex flex-col ${props.justify}`}>
          <Header isAuthenticated={props.auth} />
          <main className={styles.main}>{props.children}</main>
          <div className="m-auto" />
          <Footer />
        </div>
      </Page>
    </>
  );
};

export default PrimaryLayout;
