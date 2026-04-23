import Footer from "./components/Footer";
import FormMovie from "./components/FormMovie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="grow container mx-auto my-5">
        <h1 className="text-center text-2xl font-bold my-4">Administrar Peliculas</h1>
        <FormMovie></FormMovie>
      </main>
      <Footer />
    </>
  );
}

export default App;
