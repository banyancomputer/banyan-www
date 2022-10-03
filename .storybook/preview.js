import '../styles/globals.sass';
import '../components/navigation/Header.module.scss';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
