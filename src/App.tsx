import { useEffect, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import { useLazyGetAuthMeQuery } from "./redux/services/user";
import { BackdropContext } from "./shared/hoc/BackdropProvider";

function App() {
  const [fetcherAuthMe] = useLazyGetAuthMeQuery();
  const { toggleBackdrop } = useContext(BackdropContext);

  const fetchAuthMe = async () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token || !localStorage.getItem("token")) {
      return;
    }

    try {
      toggleBackdrop(true);

      await fetcherAuthMe(token).unwrap();
      localStorage.setItem("token", token);
    } catch (error) {
      window.location.replace(import.meta.env.VITE_REDIRECT_HOME);
    } finally {
      toggleBackdrop(false);
    }
  };

  useEffect(() => {
    fetchAuthMe();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
