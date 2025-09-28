import { createContext, useContext } from 'react';
import { Animate, Dismiss, Offset, Placement } from './types';

interface MenuContextType {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  placement: Placement;
  offset: Offset;
  dismiss: Dismiss;
  animate?: Animate;
  lockScroll: boolean;
  allowHover: boolean;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a Menu component');
  }
  return context;
};