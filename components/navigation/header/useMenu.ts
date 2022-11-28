import { ReactNode } from 'react';

export interface MenuItemLeaf {
  key: string;
  title: string;
  link: string;
  icon?: ReactNode;
}

export interface MenuItemNode {
  key: string;
  title: string;
  items?: MenuItemLeaf[];
  icon?: ReactNode;
}

export type MenuItem = MenuItemLeaf | MenuItemNode;
export type Menu = MenuItem[];

type UseMenu = () => Menu;
const useMenu: UseMenu = () => {
  return [
    {
      key: 'contact',
      title: 'Contact',
      link: '/contact',
    },
  ];
};

export default useMenu;
