import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Volunteer from "./Pages/Volunteer";
import EventDetail from "./Pages/EventDetail";
import Create from "./Pages/Create";

function App() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/news" exact component={News} />
                        <Route path="/volunteer" exact component={Volunteer} />
                        <Route
                            exact
                            path="/volunteer/detail/:id"
                            component={EventDetail}
                        />
                        <Route
                            path="/volunteer/create"
                            exact
                            component={Create}
                        />
                        {/* <Route exact path="/volunteer/create">
                            {!isAuthenticated ? (
                                <Redirect to="/login" />
                            ) : (
                                <Create />
                            )}
                        </Route> */}
                        <Route
                            exact
                            path="/login"
                            component={loginWithRedirect}
                        />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
