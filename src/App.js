import { Provider } from "react-redux";
import Home from "./components/Home";
import Main from "./components/Main";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen bg-gradient-to-r from-pink-100 to-violet-200 fixed top-0 left-0 w-full pr-20">
        <Home />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
