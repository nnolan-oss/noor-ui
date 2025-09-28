"use client";
import { useMenuContext } from "./MenuContext";
import { cloneElement, useRef, useEffect } from "react";

interface MenuTriggerProps {
  children: React.ReactElement;
}

export const MenuTrigger: React.FC<MenuTriggerProps> = ({ children }) => {
  const { isOpen, setOpen, triggerRef, allowHover } = useMenuContext();
  const localRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (triggerRef) {
      triggerRef.current = localRef.current;
    }
  }, [triggerRef]);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (allowHover) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (allowHover) {
      setOpen(false);
    }
  };

  return cloneElement(children, {
    ref: localRef,
    onClick: handleClick,
    onMouseEnter: allowHover ? handleMouseEnter : undefined,
    onMouseLeave: allowHover ? handleMouseLeave : undefined,
    "aria-expanded": isOpen,
    "aria-haspopup": true,
  });
};
