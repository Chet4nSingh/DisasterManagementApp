import Link from "./UI/Link";

export default function Header() {
  return (
    <header className="py-4 px-8 flex border justify-between items-center">
      <h1 className="text-6xl text-center text-gun-metal font-bold">AapdaSuraksha</h1>
      <nav>
        <Link route="#contact">Contact</Link>
        <Link route="#guide">Guide</Link>
        <Link route="#blog">Blog</Link>
        <Link route="#about">About</Link>
        <Link route="#profile">Profile</Link>
      </nav>
    </header>
  );
}
