import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { CollectionCard } from "./components/CollectionCard";
import { PunkLists } from "./components/CollectionCard/PunkLists";
import { PunkHighlighter } from "./components/PunkHighlighter";

function App() {
  const [punks, setPunks] = useState([]);
  const [error, setError] = useState("");
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xb94e6bF1248F9fF9eb15A6B74d7008170de61E0a&order_direction=asc"
      )
      .then((res) => {
        setPunks(res.data.assets);
        console.log("res:", res.data.assets);
      })
      .catch((err) => console.log("error:", err));
  }, []);

  return (
    <div className="app">
      <Header />
      {
        (punks.length > 0) &&
        <>
        <PunkHighlighter activePunk={punks[selectedPunk]} />
        <PunkLists punkListData={punks} setSelectedPunk={setSelectedPunk} />
        </>
      }
    </div>
  );
}

export default App;
