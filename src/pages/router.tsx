import { Layout } from "../shared/components/drawer/Layout";
import { Properties } from "./properties/Properties";
import { createBrowserRouter } from "react-router-dom";
import { Publish } from "./publish/Publish";
import { NAVMENU } from "../shared/constants/menu";
import { Archive } from "./archive/Archive";
import { Property } from "./property/Property";
import { Edit } from "./publish/Edit";
import { ArchiveProperty } from "./archiveProperty/ArchiveProperty";

export const router = createBrowserRouter([
  {
    path: NAVMENU.PROPERTIES,
    element: <Layout />,
    children: [
      { element: <Properties />, index: true },
      { path: NAVMENU.PUBLIC, element: <Publish /> },
      { path: `${NAVMENU.EDIT}:id`, element: <Edit /> },
      { path: NAVMENU.ARCHIVE, element: <Archive /> },
      { path: `${NAVMENU.PROPERTY}:id`, element: <Property /> },
      { path: `${NAVMENU.ARCHIVE}:id`, element: <ArchiveProperty /> },
    ],
    errorElement: <div>Not Found</div>,
  },
]);
