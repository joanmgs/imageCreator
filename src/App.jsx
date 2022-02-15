import { useState } from "react";
import html2canvas from "html2canvas";
import "./styles/App.css";

function App() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [image, setImage] = useState("");

  // Handlers
  const handleChangeImage = (e) => setImage(e.target.value);
  const handleChangeLine1 = (e) => setLine1(e.target.value);
  const handleChangeLine2 = (e) => setLine2(e.target.value);
  // Download button
  const handleBtn = (e) => {
    //Create the code in the id in an img
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      //This function download an image according to the code inside #capture
      let link = document.createElement("a");
      link.download = `${image}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const CardImage = () => {
    return (
      <div className="card-container" id="capture">
        <span>{line1}</span>
        <img
          src={image ? `/img/${image}.png` : ""}
          alt={image ? `character: ${image}` : ""}
        />
        <span>{line2}</span>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Image Creator</h1>
      <select defaultValue="" onChange={handleChangeImage}>
        <option value="" disabled>
          Select character
        </option>
        <option value="tanjiro">Tanjiro</option>
        <option value="nezuko">Nezuko</option>
        <option value="zenitsu">Zenitsu</option>
        <option value="inosuke">Inosuke</option>
      </select>

      <input onChange={handleChangeLine1} type="text" placeholder="Top text" />
      <input
        onChange={handleChangeLine2}
        type="text"
        placeholder="Bottom text"
      />

      <button className="button-30" onClick={handleBtn}>
        Export
      </button>

      {image ? <CardImage /> : ""}
    </div>
  );
}

export default App;
