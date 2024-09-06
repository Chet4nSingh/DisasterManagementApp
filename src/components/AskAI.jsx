import { useEffect, useRef } from "react";

export default function AskAI({ open, closeModal }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    return () => dialog.current.close();
  }, [open]);

  return (
    <dialog
      ref={dialog}
      onClose={closeModal}
      className="w-1/4 bg-beige h-[70%] z-10 ml-0 fixed top-0 left-32 rounded-xl outline-none backdrop:bg-black backdrop:opacity-50"
    >
      <section id="chat flex p-4 flex-col justify-between h-full w-full">
        <p>

        </p>
        <input type="text" />
      </section>
    </dialog>
  );
}
