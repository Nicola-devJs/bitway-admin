import { useEffect, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import { useLazyGetAuthMeQuery } from "./redux/services/user";
import { BackdropContext } from "./shared/hoc/BackdropProvider";
import { getCookie } from "./shared/helpers/cookie";

function App() {
  const [fetcherAuthMe] = useLazyGetAuthMeQuery();
  const { toggleBackdrop } = useContext(BackdropContext);

  useEffect(() => {
    toggleBackdrop(true);
    const token = getCookie("token");

    if (!token) {
      window.location.replace(import.meta.env.VITE_REDIRECT_HOME);
      return;
    }

    fetcherAuthMe(token)
      .unwrap()
      .catch(() => {
        window.location.replace(import.meta.env.VITE_REDIRECT_HOME);
      })
      .finally(() => {
        toggleBackdrop(false);
      });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
