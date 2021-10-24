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

  useEffect(() => {

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
        <Route exact path="/">
          <MainContent mainContent={0} />
          <Moon />
          <ScrollBar />
          <ScrollDownItem />
        </Route>
        <Route exact path="https://kevinmorize.netlify.app/about">
          <MainContent mainContent={1} />
          <ScrollBar />
        </Route>
        <Route exact path="https://kevinmorize.netlify.app/production">
          <MainContent mainContent={2} />
          <ScrollBar />
        </Route>
        <Route exact path="https://kevinmorize.netlify.app/contact">
          <MainContent mainContent={3} />
          <ScrollBar />
        </Route>

        <Route exact path="/about/content">
          <AboutContent />
        </Route>

        <Route exact path="/production/content">
          <ProductionContent />
        </Route>

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
