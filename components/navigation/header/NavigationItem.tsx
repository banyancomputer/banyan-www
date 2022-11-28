import { Popover, Transition } from '@headlessui/react';
import { MenuItem, MenuItemLeaf, MenuItemNode } from './useMenu';
import useDesktopMediaQuery, {
  useTouchDeviceMediaQuery,
} from '@lib/hooks/useMedia';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, Fragment, useCallback, useRef } from 'react';
import Typography from '../../typography/Typography';

interface INavigationItem {
  node: MenuItem;
}
