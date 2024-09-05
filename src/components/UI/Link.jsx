export default function Link({ route, children }) {
  return (
    <a
      href={route}
      className="mr-4 text-2xl text-white bg-gun-metal hover:bg-gun-metal-dark py-2 px-8"
    >
      {children}
    </a>
  );
}
