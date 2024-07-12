import { Route, Switch } from "wouter";
import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/About.jsx";
import StoopSale from "./pages/StoopSale.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/stoop-sale" component={StoopSale} />

        {/* Not Found Page */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
