import { Link, Route, Switch } from "wouter";
import LandingPage from "./pages/LandingPage.jsx";
import StoopSale from "./pages/StoopSale.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
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
