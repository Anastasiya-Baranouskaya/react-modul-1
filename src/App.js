import "./App.css";
import { Gallery } from "./components/Gallery/Gallery";
import Title from "./components/Title/Title";

const galleryImages = {
  title: "Images",
  description: "Практический текст для понимания",
  images: [
    {
      id: "1",
      source:
        "https://www.wyborkierowcow.pl/wp-content/uploads/2021/07/lotus-emira-premiera-1.jpg",
    },
    {
      id: "2",
      source:
        "https://i.wpimg.pl/730x0/m.autokult.pl/24b7e702-2020-lotus-evij-e59a1b6.jpg",
    },
  ],
};
const { title, description, images } = galleryImages;
function App() {
  return (
    <div className="App">
      Module 1
      <Gallery i={images}>
        {/* {IF} */}
        {title === "images" && <Title value={title} />}
        {/* {IF} */}
        {/* {IF ... else = TERNARY} */}
        {title === "images" ? (
          <h2>Условие выполнено</h2>
        ) : (
          <h2>Условие НЕ выполнено</h2>
        )}
        {/* {IF ... else = TERNARY} */}

        <p>Just text</p>
      </Gallery>
    </div>
  );
}

export default App;
