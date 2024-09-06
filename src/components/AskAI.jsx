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
      className="w-1/4 bg-light-purple h-[80%] z-10 ml-0 mt-0 fixed top-12 left-28 rounded-3xl outline-none border-2 border-dark-purple backdrop:bg-black backdrop:opacity-50"
    >
      <section id="chat" className="h-full w-full flex p-4 flex-col justify-between">
        <p className="w-full">

        </p>
        <p className="w-full bg-dark-purple border border-dark-purple-x rounded-2xl flex items-center">
          <input type="text" placeholder="Ask me anything..." className="h-12 w-[80%] text-black px-4 text-xl outline-none rounded-tl-2xl rounded-bl-2xl" />
          <button className="flex-1 rounded-tr-2xl rounded-br-2xl text-white text-2xl bg-dark-purple hover:bg-dark-purple-x h-full"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
        </p>
      </section>
    </dialog>
  );
}
