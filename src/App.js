import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        {/* <Route path="/news" exact component={News} /> */}
                        {/* <Route path="*" exact component={NotFound} /> */}
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
