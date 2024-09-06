import { useState } from "react";
import Aside from "./components/Aside";
import AskAI from "./components/AskAI";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  const [chatIsOpen, setChatIsOpen] = useState(false);


  return (
    <>
      <Header />
      <AskAI open={chatIsOpen} closeModal={() => setChatIsOpen(false)} />
      <main className="px-8 flex justify-between">
        <Map />
        <Aside />
        <button onClick={() => setChatIsOpen(true)} className="fixed bottom-16 left-4 w-24 h-24 rounded-full bg-gun-metal hover:bg-gun-metal-dark hover:scale-110 duration-100 text-white text-4xl">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </button>
      </main>
    </>
  );
}

export default App;
