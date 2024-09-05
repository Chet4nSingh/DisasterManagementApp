export default function Modal({ children }) {
  return <dialog className="min-h-[90%]" open>{children}</dialog>;
}
