import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import NewsLater from "./components/NewsLater";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <NewsLater />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
