import React from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"
import { Home } from "./containers/Home/Home"
import { PickGamePage } from "./containers/PickGamePage/PickGamePage.component"
import { Smorrebrod } from "./containers/PickLevelPage/Smorrebrod.component"
import { Wienerbrod } from "./containers/PickLevelPage/Wienerbrod.component"
import SmorrebrodGame from "./containers/GamePage/Smorrebrod.GamePage"
import WienerbrodGame from "./containers/GamePage/Wienerbrod.GamePage"
import { WienerbrodRecipePage } from "./containers/RecipePage/WienerbrodRecipe.component"
import { SmorrebrodRecipePage } from "./containers/RecipePage/SmorrebrodRecipe.component"
import { VoucherPage } from "./containers/VoucherPage/VoucherPage.component"
import { ErrorPage } from "./containers/404Page/404Page.component"

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/smorrebrod-game" component={SmorrebrodGame} />
          <Route exact path="/wienerbrod-game" component={WienerbrodGame} />
          <Route exact path="/pick-game-page" component={PickGamePage} />
          <Route exact path="/smorrebrod" component={Smorrebrod} />
          <Route exact path="/wienerbrod" component={Wienerbrod} />
          <Route
            exact
            path="/smorrebrod-recipe"
            component={SmorrebrodRecipePage}
          />
          <Route
            exact
            path="/wienerbrod-recipe"
            component={WienerbrodRecipePage}
          />
          <Route exact path="/voucher-page" component={VoucherPage} />
          <Route exact path="/404-page" component={ErrorPage} />
          <Redirect to="/404-page" />
        </Switch>
      </Router>
    </React.StrictMode>
  )
}

export default App
