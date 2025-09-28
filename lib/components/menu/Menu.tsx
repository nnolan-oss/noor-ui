import { useState, useRef, useEffect } from 'react';
import { useFloating, autoUpdate, offset as floatingOffset } from '@floating-ui/react';
import { MenuContext } from './MenuContext';
import { type MenuProps } from './types';

export const Menu: React.FC<MenuProps> = ({
  open: controlledOpen,
  handler,
  placement = 'bottom',
  offset = 5,
  dismiss = { outsidePress: true, escapeKey: true },
  animate,
  lockScroll = false,
  allowHover = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(controlledOpen ?? false);
  const triggerRef = useRef<HTMLElement>(null);

  const { refs, floatingStyles } = useFloating({
    placement,
    middleware: [floatingOffset(offset)],
    whileElementsMounted: autoUpdate,
  });

  const effectiveOpen = controlledOpen !== undefined ? controlledOpen : isOpen;
  const setEffectiveOpen = handler || setIsOpen;

  // Handle lock scroll
  useEffect(() => {
    if (lockScroll && effectiveOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [lockScroll, effectiveOpen]);

  // Handle escape key
  useEffect(() => {
    if (!dismiss.escapeKey || !effectiveOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setEffectiveOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [dismiss.escapeKey, effectiveOpen, setEffectiveOpen]);

  // Handle outside press
  useEffect(() => {
    if (!dismiss.outsidePress || !effectiveOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        refs.floating.current &&
        !refs.floating.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setEffectiveOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dismiss.outsidePress, effectiveOpen, setEffectiveOpen, refs.floating]);

  return (
    <MenuContext.Provider
      value={{
        isOpen: effectiveOpen,
        setOpen: setEffectiveOpen,
        triggerRef,
        placement,
        offset,
        dismiss,
        animate,
        lockScroll,
        allowHover,
      }}
    >
      <div className="relative" ref={refs.setReference}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};