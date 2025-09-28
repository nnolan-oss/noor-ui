import { useMenuContext } from './MenuContext';
import { useFloating } from '@floating-ui/react';
import { useRef } from 'react';

interface MenuListProps {
  children: React.ReactNode;
}

export const MenuList: React.FC<MenuListProps> = ({ children }) => {
  const { isOpen, animate, placement } = useMenuContext();
  const { refs, floatingStyles } = useFloating({ placement });

  if (!isOpen) return null;

  return (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-lg 
        border border-gray-200 dark:border-gray-700
        py-2
        min-w-[200px]
        z-50
        ${animate?.enter || 'animate-in fade-in zoom-in-95'}
        ${animate?.exit || 'animate-out fade-out zoom-out-95'}
      `}
    >
      <ul role="menu">{children}</ul>
    </div>
  );
};