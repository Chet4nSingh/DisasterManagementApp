export default function Aside() {
  return (
    <aside
      id="help"
      className="w-[34.5%] h-[40rem] border-2 border-gun-metal flex flex-col gap-4 p-4"
    >
      <a className="bg-gun-metal hover:bg-gun-metal-dark text-center py-4 text-white text-xl">
        Report A Disaster
      </a>
      <a className="bg-gun-metal hover:bg-gun-metal-dark text-center py-4 text-white text-xl">
        Donate To Rescue Camps
      </a>
      <a className="bg-gun-metal hover:bg-gun-metal-dark text-center py-4 text-white text-xl">
        Volunteer
      </a>
      <div id="chatbot" className="bg-gun-metal opacity-50 flex-1"></div>
      <button className="bg-gun-metal hover:bg-gun-metal-dark text-center py-4 text-white text-xl">Panic</button>
    </aside>
  );
}