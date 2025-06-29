'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

const MenuModal = forwardRef(function MenuModal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return (
    <dialog ref={dialog} className="modal">
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default MenuModal;
