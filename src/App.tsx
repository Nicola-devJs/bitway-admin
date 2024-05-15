import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import { BackdropProvider } from "./shared/hoc/BackdropProvider";

function App() {
  return (
    <BackdropProvider>
      <RouterProvider router={router} />
    </BackdropProvider>
  );
}

export default App;
