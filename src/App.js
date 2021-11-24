import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Volunteer from "./Pages/Volunteer";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/news" exact component={News} />
                        <Route path="/volunteer" exact component={Volunteer} />
                        {/* <Route path="*" exact component={NotFound} /> */}
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
