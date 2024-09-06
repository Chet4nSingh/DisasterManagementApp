export default function Aside() {
  return (
    <aside
      id="help"
      className="w-[34.5%] h-[40rem] border-2 border-dark-purple rounded-lg flex flex-col justify-between gap-4 p-4"
    >
      <section className="h-3/4 border grid grid-cols-2 grid-rows-2 gap-8">
        <a className="border-2 border-dark-purple bg-white text-center py-4 text-white text-xl rounded-lg">
          Report A Disaster
        </a>
        <a className="border-2 border-dark-purple bg-white text-center py-4 text-white text-xl rounded-lg">
          Donate To Rescue Camps
        </a>
        <a className="border-2 border-dark-purple bg-white text-center py-4 text-white text-xl rounded-lg">
          Volunteer
        </a>
      </section>
      <button className="bg-red-600 hover:bg-red-700 text-center py-4 text-white text-2xl rounded-lg">
        Panic
      </button>
    </aside>
  );
}
