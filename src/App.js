import { Redirect, Route, Switch, useHistory, useLocation } from "react-router";
import { useEffect } from "react";
import Gradiant from './components/Gradiant';
import GrowingCircle from './components/GrowingCircle';
import Header from './components/Header';
import Mouse from './components/Mouse';
import Nav from './components/Nav';
import MainContent from "./components/MainContent";
import ScrollBar from "./components/ScrollBar";
import Moon from "./components/Moon";
import AboutContent from "./pages/AboutContent";
import ProductionContent from "./pages/ProductionContent";
import ScrollDownItem from "./components/ScrollDownItem";

function App() {
  const location = useLocation();
  const history = useHistory();

  console.log(window.location)

  useEffect(() => {
    var table = [];

    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/";

      const wheelRouter = (before, after) => {
        if (e.wheelDeltaY < 0) {
          history.push(after);
        } else if (e.wheelDeltaY > 0) {
          history.push(before)
        }
      }

      switch (window.location.href.toString()) {

        case url:
          if (e.wheelDeltaY < 0) {
            history.push("about")
          }
          break;

        case url + "about":
          wheelRouter(url, "production");
          break;

        case url + "production":
          wheelRouter("about", "contact");
          break;

        case url + "contact":
          if (e.wheelDeltaY > 0) {
            history.push("production")
          }
          break;

        default:
      }
    }

    const handleMoveToElement = (e) => {

      const url = window.location.origin + "/";
      let position = e.touches[0].clientY;
      table.push(position);

      table.map(() => {
        if (table.length >= 5) {

          switch (window.location.href.toString()) {

            case url:
              if (table[0] - table[table.length - 1] > 0) {
                history.push("about");
                table = [];
              } else {
                history.push("contact");
                table = [];
              }
              break;

            case url + "about":
              if (table[0] - table[table.length - 1] > 0) {
                history.push("production");
                table = [];
              } else {
                history.push(url);
                table = [];
              }
              break;

            case url + "production":
              if (table[0] - table[table.length - 1] > 0) {
                history.push("contact");
                table = []
              } else {
                history.push("about");
                table = []
              }
              break;

            case url + "contact":
              if (table[0] - table[table.length - 1] < 0) {
                history.push("#production");
                table = [];
              } else {
                history.push("/");
                table = [];
              }
              break;

            default:
          }
        }
        return table
      })
    }

    window.addEventListener('touchmove', handleMoveToElement);
    window.addEventListener('wheel', handleScrollToElement);

  }, [history])

  return (
    <>
      <Mouse />
      <Header />
      <Nav />
      <Gradiant />
      <GrowingCircle />
      <Switch location={location} key={location.pathname}>

        <Route exact path="/" pathname="/#">
          <MainContent mainContent={0} />
          <Moon />
          <ScrollBar />
          <ScrollDownItem />
        </Route>
        <Route exact path="/about" pathname="/#about">
          <MainContent mainContent={1} />
          <ScrollBar />
        </Route>
        <Route exact path="/production" pathname="/#production">
          <MainContent mainContent={2} />
          <ScrollBar />
        </Route>
        <Route exact path="/contact" pathname="/#contact">
          <MainContent mainContent={3} />
          <ScrollBar />
        </Route>

        <Route exact path="/about/content" pathname="/about/content">
          <AboutContent />
        </Route>

        <Route exact path="/production/content" pathname="/production/content">
          <ProductionContent />
        </Route>

        <Redirect to="kevinmorize.netlify.app" />
      </Switch>
    </>
  );
}

export default App;
