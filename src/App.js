import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Header from "./components/Header";
import Moon from "./components/Moon";
import Gradiant from "./components/Gradiant";
import GrowingCircle from "./components/GrowingCircle";

import Mouse from "./components/Mouse";
import Nav from "./components/Nav";
import ScrollBar from "./components/ScrollBar";

import MainContent from "./components/MainContent";
import AboutContent from "./pages/AboutContent";
import ProductionContent from "./pages/ProductionContent";
import ScrollDownItem from "./components/ScrollDownItem";

function App() {
  const location = useLocation();
  const history = useHistory();

  const [isEng, setIsEng] = useState(false);

  const displayEng = () => {
    const flagIco = document.querySelector(".flag");
    if (!isEng) {
      flagIco.src = "../assets/img/french.png";
      setIsEng(true);
    } else {
      flagIco.src = "../assets/img/english.png";
      setIsEng(false);
    }
  };

  const handleScrollToElement = (dir, e) => {
    const url = window.location.origin + "/";

    const wheelRouter = (before, after) => {
      if (dir === "down") {
        history.push(after);
      } else if (dir === "up") {
        history.push(before);
      }
    };

    switch (window.location.href.toString()) {
      case url:
        if (dir === "down") {
          history.push("about");
        }
        break;

      case url + "about":
        wheelRouter(url, "production");

        break;

      case url + "production":
        wheelRouter("about", "contact");

        break;

      case url + "contact":
        if (dir === "up") {
          history.push("production");
        }
        break;

      default:
        break;
    }
  };
  useEffect(() => {}, [history]);

  return (
    <ReactScrollWheelHandler
      upHandler={(e) => handleScrollToElement("up", e)}
      downHandler={(e) => handleScrollToElement("down", e)}
    >
      <Mouse />
      <Header />
      <Nav english={isEng} />
      <img
        className="flag hovered"
        alt="flag"
        onClick={displayEng}
        src="../assets/img/english.png"
      />
      <Gradiant />
      <GrowingCircle />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" pathname="/#">
          <MainContent mainContent={0} english={isEng} />
          <Moon />
          <ScrollBar />
          <ScrollDownItem />
        </Route>
        <Route exact path="/about" pathname="/#about">
          <MainContent mainContent={1} english={isEng} />
          <ScrollBar />
        </Route>
        <Route exact path="/production" pathname="/#production">
          <MainContent mainContent={2} english={isEng} />
          <ScrollBar />
        </Route>
        <Route exact path="/contact" pathname="/#contact">
          <MainContent mainContent={3} english={isEng} />
          <ScrollBar />
        </Route>

        <Route exact path="/about/content" pathname="/#about/#content">
          <AboutContent english={isEng} />
        </Route>

        <Route
          exact
          path="/production/content"
          pathname="/#production/#content"
        >
          <ProductionContent english={isEng} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </ReactScrollWheelHandler>
  );
}

export default App;
