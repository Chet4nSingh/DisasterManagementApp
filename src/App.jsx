import Aside from "./components/Aside";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <>
      <Header />
      <main className="px-8 flex justify-between">
        <Map />
        <Aside />
      </main>
    </>
  );
}

export default App;
