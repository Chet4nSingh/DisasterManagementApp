export default function Header() {
  return (
    <header className="py-4 px-8 flex border justify-between items-center">
      <h1 className="text-6xl text-center text-gun-metal font-bold">Disaster</h1>
      <nav>
        <a href="#contact" className="mr-4 text-2xl text-white bg-gun-metal py-2 px-4">Contact</a>
        <a href="#contact" className="mr-4 text-2xl text-white bg-gun-metal py-2 px-4">Guide</a>
        <a href="#contact" className="mr-4 text-2xl text-white bg-gun-metal py-2 px-4">Blog</a>
        <a href="#contact" className="mr-4 text-2xl text-white bg-gun-metal py-2 px-4">About</a>
      </nav>
    </header>
  );
}
