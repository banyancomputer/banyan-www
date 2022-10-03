import '../styles/globals.sass';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
