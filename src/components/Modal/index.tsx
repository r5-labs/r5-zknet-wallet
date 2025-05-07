import { useState, useEffect, useRef } from "react";
import { ModalBackground, ModalContainer } from "../../theme";
import { useOnClickOutside } from 'usehooks-ts'

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const [visible, setVisible] = useState(open);
  const [exiting, setExiting] = useState(false);

  useOnClickOutside(ref, () => onClose())

  useEffect(() => {
    if (open) {
      setVisible(true);
      setExiting(false);
    } else if (visible) {
      setExiting(true);
      const t = setTimeout(() => {
        setVisible(false);
        setExiting(false);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [open, visible]);

  if (!visible) return null;

  return (
    <ModalBackground visible={visible}>
      <ModalContainer ref={ref} exiting={exiting} style={{ zIndex: 1 }}>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}
