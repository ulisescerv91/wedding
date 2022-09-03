import "./App.css";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";
import { Section5 } from "./components/Section5";
import { Section6 } from "./components/Section6";
import { Hospedaje } from "./components/Hospedaje";
import { Section7 } from "./components/Section7";
import { Section8 } from "./components/Section8";
import { Section9 } from "./components/Section9";
import { Regalos } from "./components/Regalos";
import { HashTag } from "./components/HashTag";
import { Section10 } from "./components/Section10";
import { Gracias } from "./components/Gracias";

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Hospedaje />
      <Section7 />
      <Section8 />
      <Section9 />
      <Regalos />
      <HashTag />
      <Section10 />
      <Gracias />
    </div>
  );
}

export default App;
