import styles from '../styles/App.module.scss';

import * as React from 'react';
import * as V from './../lib/utilities/viewer';
import * as C from './../lib/constants/constants';

/* Wallet Sign In */
// import * as S from './../lib/crypto/siwe';

import Cookies from 'js-cookie';
import Input from './../components/input/Input';
import BaseButton from './../components/buttons/base/BaseButton';
import { H2, H3, H4, P } from './../components/typography/Typography';
import { NextPageWithLayout } from './page';
import PrimaryLayout from './../components/layouts/primary/PrimaryLayout';

export async function getServerSideProps(context: any) {
  const viewer = await V.getViewerFromHeader(context.req.headers);

  if (viewer) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
    };
  }

  return {
    props: {},
  };
}

/*
 * Description: Handles Authenticating a User with an API Token
 * Routes directly to /home, and is validated by middleware
 */
async function handleTokenAuthenticate(state: any) {
  let host = process.env.API_HOST;
  let response = await fetch(`${host}/user/stats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.key}`,
    },
  });
  if (response && response.status === 403) {
    alert('Invalid API key');
  } else {
    Cookies.set(C.auth, state.key);
    // Trigger `handleTokenAuthenticate` again to get the user's new key
    window.location.reload();
  }
  return response;
}

/**
 * Sign in with a crypto wallet
 * @returns {Promise<err>} - Returns a promise that resolves to an error if there is one.
 */
async function handleSiweLogin() {
  let host = process.env.API_HOST;
  let providerData = null 
  // await S.getProviderData().catch((_: any) => {
  //   return null;
  // });
  if (!providerData) {
    return new Error('Could not connect to wallet');
  }
  let { provider, address, ens } = providerData;
  // console.log("Provider Data", providerData);
  let authKey: string | null = null;
  // await S.estuaryAuth(
  //   provider,
  //   address,
  //   ens,
  //   host
  // ).catch((_: any) => {
  //   return null;
  // });
  if (!authKey) {
    return new Error('Could not authenticate against Estuary');
  }
  Cookies.set(C.auth, authKey, {
    expires: 1,
    sameSite: 'lax',
  });
  // Delete the cookie for the nonce
  Cookies.remove(C.siweNonce);
  // Navigate to the home page
  // TODO: This should be '/home' but that page doesn't exist yet
  window.location.href = '/';
  return null;
}

const SignIn: NextPageWithLayout = (_props: any) => {
  const [state, setState] = React.useState({
    loading: false,
    authLoading: false,
    fissionLoading: false,
    key: '',
  });

  /* TODO: Figure out UI layout */
  return (
    <div>
      <H2>Sign in</H2>

      {/* <P style={{ marginTop: 16 }}>
        If you have a wallet, you can sign in to Banyan already!
      </P>

      <div className={styles.actions}>
        <BaseButton
          style={{ width: '100%', marginTop: 8 }}
          onClick={async () => {
            setState({ ...state, loading: true });
            let err: Error | null = await handleSiweLogin();
            if (err) {
              alert(err.message);
              setState({ ...state, loading: false });
            }
          }}
        >
          Sign in with with your Wallet
        </BaseButton>
      </div>

      <H3 style={{ marginTop: 32 }}>Authenticate Using Key</H3>
      <P style={{ marginTop: 8 }}>
        You can authenticate using an API key if you have one.
      </P>

      <H4 style={{ marginTop: 32 }}>API key</H4>
      <Input
        style={{ marginTop: 8 }}
        placeholder="ex: ESTxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxARY"
        name="key"
        value={state.key}
        onChange={(e: any) =>
          setState({ ...state, [e.target.name]: e.target.value })
        }
      />

      <div className={styles.actions}>
        <BaseButton
          style={{ width: '100%' }}
          loading={state.authLoading ? state.authLoading : undefined}
          onClick={async () => {
            setState({ ...state, authLoading: true });
            if (state.key === '' || !state.key) {
              alert('Please enter an API key');
              setState({ ...state, authLoading: false });
              return;
            }
            await handleTokenAuthenticate(state).then((response) => {
              if (response.status == 403) {
                setState({ ...state, authLoading: false });
              }
            });
          }}
        >
          Authenticate
        </BaseButton>
      </div> */}
    </div>
  );
};

export default SignIn;

SignIn.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
