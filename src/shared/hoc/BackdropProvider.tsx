import { Backdrop, CircularProgress } from "@mui/material";
import React, { useState } from "react";

interface IContext {
  toggleBackdrop: (isActive: boolean) => void;
}

export const BackdropContext = React.createContext<IContext>({} as IContext);

export const BackdropProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setActive] = useState(false);

  const toggleBackdrop = (isShow: boolean) => {
    setActive(isShow);
  };

  return (
    <BackdropContext.Provider value={{ toggleBackdrop }}>
      {children}
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isActive}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </BackdropContext.Provider>
  );
};
