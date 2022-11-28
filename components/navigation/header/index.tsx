import * as React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import useDesktopMediaQuery from '@lib/hooks/useMedia';
import { useEffect } from 'react';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = (props: IHeader) => {
  // Controls whether the desktop or mobile header is shown, responsive to screen size
  const isDesktop = useDesktopMediaQuery();
  const [isDesktopState, setIsDesktopState] = React.useState(isDesktop);
  useEffect(() => {
    setIsDesktopState(isDesktop);
  }, [isDesktop]);

  return <>{isDesktopState ? <Desktop {...props} /> : <Mobile {...props} />}</>;
};

export default Header;
