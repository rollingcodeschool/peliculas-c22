import Footer from "./components/Footer";
import FormMovie from "./components/FormMovie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <FormMovie></FormMovie>
      </main>
      <Footer />
    </>
  );
}

export default App;
