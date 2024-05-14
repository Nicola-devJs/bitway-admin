import { Layout } from "../shared/components/drawer/Layout";
import { Properties } from "./properties/Properties";
import { createBrowserRouter } from "react-router-dom";
import { Publish } from "./publish/Publish";
import { NAVMENU } from "../shared/constants/menu";
import { Moderation } from "./moderation/Moderation";
import { Archive } from "./archive/Archive";
import { Property } from "./property/Property";

export const router = createBrowserRouter([
  {
    path: NAVMENU.PROPERTIES,
    element: <Layout />,
    children: [
      { element: <Properties />, index: true },
      { path: NAVMENU.PUBLIC, element: <Publish /> },
      { path: NAVMENU.MODERATION, element: <Moderation /> },
      { path: NAVMENU.ARCHIVE, element: <Archive /> },
      { path: `${NAVMENU.PROPERTY}:name`, element: <Property /> },
    ],
    errorElement: <div>Not Found</div>,
  },
]);
