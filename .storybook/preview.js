/* Remember to import Custom Styles here */
import '../styles/globals.scss';
import '../components/navigation/header/Header.module.sass';
// import '../components/navigation/footer/Footer.module.sass';
// import '../components/buttons/base/BaseButton.module.scss';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
