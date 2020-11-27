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
import { PickLevelPage } from "./containers/PickLevelPage/PickLevelPage.component"
import GamePage from "./containers/GamePage/GamePage.component"
import { RecipePage } from "./containers/RecipePage/RecipePage.component"
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
          <Route exact path="/game-page" component={GamePage} />
          <Route exact path="/pick-game-page" component={PickGamePage} />
          <Route exact path="/pick-level-page" component={PickLevelPage} />
          <Route exact path="/recipe-page" component={RecipePage} />
          <Route exact path="/voucher-page" component={VoucherPage} />
          <Route exact path="/404-page" component={ErrorPage} />
          <Redirect to="/404-page" />
        </Switch>
      </Router>
    </React.StrictMode>
  )
}
export default App
