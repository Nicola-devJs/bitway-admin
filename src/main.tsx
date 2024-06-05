import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BackdropProvider } from "./shared/hoc/BackdropProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BackdropProvider>
      <App />
    </BackdropProvider>
  </Provider>
);
