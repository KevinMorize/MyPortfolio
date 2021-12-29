import { Redirect, Route, Switch, useHistory, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Gradiant from "./components/Gradiant";
import GrowingCircle from "./components/GrowingCircle";
import Header from "./components/Header";
import Mouse from "./components/Mouse";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import ScrollBar from "./components/ScrollBar";
import Moon from "./components/Moon";
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

  useEffect(() => {
    var table = [];

    const handleScrollToElement = (e) => {
      console.log(e.deltaY);

      const url = window.location.origin + "/";

      const wheelRouter = (before, after) => {
        if (e.wheelDeltaY < 0 || e.deltaY > 0) {
          history.push(after);
        } else if (e.wheelDeltaY > 0 || e.deltaY < 0) {
          history.push(before);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0 || e.deltaY > 0) {
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
          if (e.wheelDeltaY > 0 || e.deltaY < 0) {
            history.push("production");
          }
          break;

        default:
      }
    };

    const handleMoveToElement = (e) => {
      const url = window.location.origin + "/";
      let position = e.touches[0].clientY;
      table.push(position);

      table.map(() => {
        if (table.length >= 8) {
          const addition = table[0] - table[table.length - 1];
          const minWay = window.screen.availHeight / 8;

          switch (window.location.href.toString()) {
            case url:
              if (addition >= minWay) {
                history.push("about");
                table = [];
              } else {
                table = [];
              }
              break;

            case url + "about":
              if (addition >= minWay) {
                history.push("production");
                table = [];
              } else if (addition <= -minWay) {
                history.push(url);
                table = [];
              }
              break;

            case url + "production":
              if (addition >= minWay) {
                history.push("contact");
                table = [];
              } else if (addition <= -minWay) {
                history.push("about");
                table = [];
              }
              break;

            case url + "contact":
              if (addition <= -minWay) {
                history.push("production");
                table = [];
              } else {
                table = [];
              }
              break;

            default:
              console.log("none");
          }
        }
        return table;
      });
    };

    window.addEventListener("touchmove", handleMoveToElement);
    // window.addEventListener("wheel", handleScrollToElement);
    document.addEventListener("mousewheel", handleScrollToElement);
    // document.addEventListener("DOMMouseScroll", detectTrackPad);
  }, [history]);

  return (
    <>
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
    </>
  );
}

export default App;
