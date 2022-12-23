import Header from "../components/Header";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

export default function Module({ modules }) {
  const pageContent = modules.map((module) => {
    let el = null;
    switch (module._type) {
      case "homeHeader":
        el = <Header key={module._key} {...module} />;
        break;
      case "projects":
        el = <Portfolio key={module._key} {...module} />;
        break;
      case "homeContact":
        el = <Contact key={module._key} {...module} />;
        break;
      default:
        el = null;
    }
    return el;
  });

  return <div>{pageContent}</div>;
}
