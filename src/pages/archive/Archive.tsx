import { useScreenExtension } from "../../shared/hooks/screenExtension";

export const Archive = () => {
  const [minTabletScreen] = useScreenExtension([{ screenExtension: 768 }]);

  return <div>{minTabletScreen ? "Archive" : "Not Archive"} </div>;
};
