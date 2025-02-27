import { Footer } from "./components/layouts/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layouts/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer/>
      <Footer />
    </>
  );
}

export default App
