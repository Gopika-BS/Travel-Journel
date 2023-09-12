import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data";
console.log(data);
function App() {
  const card = data.map((item) => {
    console.log(item);
    return <Hero key={item.title} {...item} />;
  });
  return (
    <>
      <Navbar />
      <section>{card}</section>
    </>
  );
}
export default App;
