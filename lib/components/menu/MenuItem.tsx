import { useMenuContext } from './MenuContext';

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick, disabled }) => {
  const { setOpen } = useMenuContext();

  const handleClick = () => {
    if (!disabled) {
      onClick?.();
      setOpen(false);
    }
  };

  return (
    <li
      role="menuitem"
      className={`
        px-4 py-2
        text-sm
        text-gray-700 dark:text-gray-200
        hover:bg-gray-100 dark:hover:bg-gray-700
        cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      onClick={handleClick}
      aria-disabled={disabled}
    >
      {children}
    </li>
  );
};